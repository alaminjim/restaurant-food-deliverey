import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import icon from "../assets/icon4.png.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-b-orange-500">
      <div className="container mx-auto flex justify-between items-center py-4 md:py-6 px-4 md:px-0">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <img src={icon} alt="Testy Bites" className="w-10 h-10 shadow-md" />
          <span className=" text-2xl md:text-3xl font-semibold text-orange-500 tracking-tight mt-1">
            Testy Bites
          </span>
        </Link>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
