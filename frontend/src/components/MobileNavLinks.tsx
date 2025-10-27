import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col space-y-3 bg-white p-4 rounded-lg shadow-md">
      <Link
        to="/order-status"
        className="px-4 py-2 rounded-lg font-bold text-gray-800 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-300"
      >
        Order Status
      </Link>
      <Link
        to="/restaurants"
        className="px-4 py-2 rounded-lg font-bold text-gray-800 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-300"
      >
        Restaurants
      </Link>
      <Link
        to="/user-profile"
        className="px-4 py-2 rounded-lg font-bold text-gray-800 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-300"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
