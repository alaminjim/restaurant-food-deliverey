import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all duration-300"
    >
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl">
        <img
          src={restaurant.imageUrl}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </AspectRatio>
      <div className="flex flex-col justify-between py-2">
        <h3 className="text-2xl font-extrabold tracking-tight mb-3 text-slate-800 group-hover:text-orange-600 transition-colors">
          {restaurant.restaurantName}
        </h3>
        <div id="card-content" className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap gap-2">
            {restaurant.cuisines.map((item, index) => (
              <span key={index} className="bg-orange-50 text-orange-700 font-medium px-3 py-1 text-sm rounded-full">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap text-sm text-slate-600 font-medium mt-auto bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1.5 text-green-600">
              <Clock className="w-4 h-4 text-green-600" />
              {restaurant.estimatedDeliveryTime} mins
            </div>
            <div className="flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-orange-500" />
              Delivery from £{(restaurant.deliveryPrice / 100).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
