import { CircleUserRound, LogOut, User, Store } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-orange-50 hover:bg-orange-100 transition-all duration-200 
  focus:outline-none focus:ring-1 focus:ring-orange-300"
      >
        <CircleUserRound className="text-orange-500 w-6 h-6" />
        <span className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mt-2 rounded-xl shadow-lg border border-gray-200 bg-white">
        {/* Manage Restaurant */}
        <DropdownMenuItem asChild>
          <Link
            to="/manage-restaurant"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-orange-50 transition"
          >
            <Store className="h-4 w-4 text-orange-500" />
            <span className="font-medium text-gray-700">Manage Restaurant</span>
          </Link>
        </DropdownMenuItem>

        {/* User Profile */}
        <DropdownMenuItem asChild>
          <Link
            to="/user-profile"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-orange-50 transition"
          >
            <User className="h-4 w-4 text-orange-500" />
            <span className="font-medium text-gray-700">User Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Log Out */}
        <DropdownMenuItem asChild>
          <Button
            onClick={() => logout()}
            className="flex items-center justify-center w-full gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md"
          >
            <LogOut className="h-4 w-4" />
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
