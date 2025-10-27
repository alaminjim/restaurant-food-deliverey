/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetAllRestaurants } from "@/api/MyRestaurantApi";
import { Helmet } from "react-helmet-async";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Restaurants = () => {
  const { restaurants, isLoading, error } = useGetAllRestaurants();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading restaurants</p>;

  const handleClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  // Empty state
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        No restaurants found. Please add your first restaurant!
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
