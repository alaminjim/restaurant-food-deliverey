import { useSearchRestaurants } from "@/api/RestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SearchResultSkeleton } from "@/components/SkeletonLoader";
import { UtensilsCrossed } from "lucide-react";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const Restaurants = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch",
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // We use "all" as the city to trigger the global search fixed in the backend
  const { results, isLoading } = useSearchRestaurants(searchState, "all");

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1,
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5">
        {[...Array(3)].map((_, i) => (
          <SearchResultSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!results?.data) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
         <div className="bg-orange-50 p-6 rounded-full">
           <UtensilsCrossed className="h-12 w-12 text-orange-500" />
         </div>
         <h2 className="text-2xl font-bold text-gray-800">No restaurants found</h2>
         <p className="text-gray-500 font-medium">Try adjusting your filters or search query to find delicious food!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 px-4 md:px-0">
      <Helmet>
        <title>Testy & Bites | Browse All Restaurants</title>
      </Helmet>
      
      {/* Sidebar Filter */}
      <div id="cuisines-list">
        <CuisineFilter
          selectedCuisines={searchState.selectedCuisines}
          onChange={setSelectedCuisines}
          isExpanded={isExpanded}
          onExpandedClick={() =>
            setIsExpanded((prevIsExpanded) => !prevIsExpanded)
          }
        />
      </div>

      {/* Main Content Area */}
      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by Cuisine or Restaurant Name"
          onReset={resetSearch}
        />
        
        <div className="flex justify-between flex-col gap-3 lg:flex-row items-center">
          <SearchResultInfo total={results.pagination.total} city="Worldwide" />
          <SortOptionDropdown
            sortOption={searchState.sortOption}
            onChange={(value) => setSortOption(value)}
          />
        </div>

        {results.data.map((restaurant) => (
          <SearchResultCard key={restaurant._id} restaurant={restaurant} />
        ))}

        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Restaurants;
