import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type RestaurantCardProps = {
  restaurant: {
    _id: string;
    restaurantName: string;
    city: string;
    cuisines: string[];
    image?: string;
  };
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${restaurant._id}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      onClick={handleClick}
      className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={restaurant.image || "/placeholder.jpg"}
        alt={restaurant.restaurantName}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="font-bold text-lg">{restaurant.restaurantName}</h3>
      <p className="text-gray-600">{restaurant.city}</p>
      <p className="text-gray-500 text-sm">{restaurant.cuisines.join(", ")}</p>
    </motion.div>
  );
};

export default RestaurantCard;
