import {
  useCreateMyRestaurant,
  useGetMyRestaurantOrders,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import { Helmet } from "react-helmet-async";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { orders } = useGetMyRestaurantOrders();

  return (
    <Tabs defaultValue="orders">
      <Helmet>
        <title>ManageRestaurantPage</title>
      </Helmet>
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Add Restaurant</TabsTrigger>
      </TabsList>

      {/* Orders Tab */}
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>

        {orders && orders.length > 0 ? (
          orders.map((order) => <OrderItemCard key={order._id} order={order} />)
        ) : (
          <p>No orders found</p>
        )}
      </TabsContent>

      {/* Create New Restaurant Tab */}
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          onSave={createRestaurant}
          isLoading={isCreateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
