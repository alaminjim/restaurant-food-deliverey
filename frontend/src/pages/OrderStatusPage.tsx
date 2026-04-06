import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Helmet } from "react-helmet-async";
import { OrderSkeleton } from "@/components/SkeletonLoader";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return (
      <div className="space-y-10">
        {[...Array(2)].map((_, i) => (
          <OrderSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="bg-orange-50 p-6 rounded-full">
          <ShoppingBag className="h-12 w-12 text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">No orders yet</h2>
        <p className="text-gray-500">You haven't placed any orders. Start exploring restaurants!</p>
        <Link 
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md"
        >
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Helmet>
        <title>Order Status | Testy & Bites</title>
      </Helmet>
      {orders.map((order) => (
        <div key={order._id} className="space-y-10 bg-white border border-slate-100 shadow-sm p-6 md:p-10 rounded-3xl hover:shadow-md transition-shadow">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
