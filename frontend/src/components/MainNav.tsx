import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-4 items-center">
      {isAuthenticated ? (
        <>
          {/* Order Status Link */}
          <Link
            to="/order-status"
            className="font-bold text-orange-500 hover:text-orange-700 transition-colors duration-300"
          >
            Order Status
          </Link>

          {/* All Restaurants Link */}
          <Link
            to="/restaurants"
            className="font-bold text-orange-500 hover:text-orange-700 transition-colors duration-300"
          >
            Restaurants
          </Link>

          {/* Username Menu */}
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="
            font-bold
            text-white
            px-6 py-2
            rounded-lg
            shadow-md
            bg-gradient-to-r from-orange-400 to-orange-600
            hover:from-white hover:to-white
            hover:text-orange-500
            hover:shadow-lg
            transition-all duration-300
          "
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
