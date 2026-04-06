import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-2">
      <CardHeader className="bg-white rounded-xl shadow-sm mb-4 pb-4">
        <CardTitle className="text-2xl font-extrabold tracking-tight flex justify-between items-center text-slate-800">
          <span>Your Order</span>
          <span className="text-orange-500 bg-orange-50 px-3 py-1 rounded-full text-xl">${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm group hover:border-orange-200 transition-colors">
            <span className="flex items-center font-medium text-slate-700">
              <Badge variant="outline" className="mr-3 bg-orange-100 text-orange-700 border-none px-2 py-0.5 rounded-full font-bold">
                {item.quantity}x
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-3 font-bold text-slate-800">
              ${((item.price * item.quantity) / 100).toFixed(2)}
              <button 
                onClick={() => removeFromCart(item)}
                className="p-1.5 bg-red-50 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white transition-all transform hover:scale-105"
              >
                <Trash size={16} />
              </button>
            </span>
          </div>
        ))}
        <Separator className="bg-slate-200 my-2" />
        <div className="flex justify-between items-center px-2 py-1 font-medium text-slate-600">
          <span>Delivery Fee</span>
          <span className="font-bold">${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator className="bg-slate-200 mb-2" />
      </CardContent>
    </div>
  );
};

export default OrderSummary;
