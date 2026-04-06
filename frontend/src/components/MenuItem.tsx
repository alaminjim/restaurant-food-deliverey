import type { MenuItem as MenuItemType } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card 
      className="cursor-pointer group hover:shadow-lg hover:border-orange-300 transition-all duration-300 overflow-hidden active:scale-[0.98]" 
      onClick={addToCart}
    >
      <div className="flex justify-between items-center bg-white group-hover:bg-orange-50/50 transition-colors">
        <CardHeader className="py-4 px-6 flex-1">
          <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
            {menuItem.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="py-4 px-6 font-extrabold text-orange-500 bg-orange-50/80 rounded-l-2xl h-full flex items-center justify-center">
          ${(menuItem.price / 100).toFixed(2)}
        </CardContent>
      </div>
    </Card>
  );
};

export default MenuItem;
