import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  const totalAmountSafe =
    typeof order.totalAmount === "number" && !isNaN(order.totalAmount)
      ? order.totalAmount
      : 0;

  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Delivering to:</span>
        <span>{order.deliveryDetails?.name || "N/A"}</span>
        <span>
          {order.deliveryDetails?.addressLine1 || "Unknown Address"},{" "}
          {order.deliveryDetails?.city || ""}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">Your Order</span>
        {order.cartItems && order.cartItems.length > 0 ? (
          <ul>
            {order.cartItems.map((item, idx) => (
              <li key={idx}>
                {item.name} x {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-gray-500 italic mt-2">No items found</span>
        )}
      </div>

      <Separator />

      {/*Total */}
      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>£{(totalAmountSafe / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
