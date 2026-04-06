/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetAllRestaurants } from "@/api/RestaurantApi";
import { Helmet } from "react-helmet-async";
import { RestaurantCardSkeleton } from "@/components/SkeletonLoader";
import { UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Restaurants = () => {
  const { restaurants, isLoading, error } = useGetAllRestaurants();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <RestaurantCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (error) return <p>Error loading restaurants</p>;

  const handleClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  // Empty state
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="bg-orange-50 p-6 rounded-full">
          <UtensilsCrossed className="h-12 w-12 text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">No restaurants yet</h2>
        <p className="text-gray-500">Wait for your favorite restaurants to join, or start searching by city!</p>
        <Link 
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md"
        >
          Explore All Food
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Helmet>
        <title>Testy & Bites | Restaurant</title>
      </Helmet>
      {restaurants.map((restaurant: any) => (
        <motion.div
          key={restaurant._id}
          className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          onClick={() => handleClick(restaurant._id)}
        >
          {/* Image */}
          <img
            src={restaurant.imageUrl}
            alt={restaurant.restaurantName}
            className="w-full h-56 object-cover"
          />

          {/* Gradient overlay + name */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col">
            <h2 className="text-white text-lg font-bold">
              {restaurant.restaurantName}
            </h2>
            <p className="text-gray-200 text-sm">
              {restaurant.city}, {restaurant.country}
            </p>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition duration-300"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Restaurants;
