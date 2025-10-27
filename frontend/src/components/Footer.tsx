import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-orange-600 text-white pt-12 pb-6 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <span className="text-4xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer text-white">
            Testy Bites
          </span>
          <p className="mt-2 text-orange-100 font-medium">
            Bringing authentic flavors to your table
          </p>
          <div className="flex gap-4 mt-4 text-lg text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-yellow-200 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-yellow-200 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-yellow-200 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:items-start items-center">
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-lg text-orange-100 font-semibold">
            <li>
              <a
                href="/privacy"
                className="hover:text-yellow-200 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-yellow-200 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-yellow-200 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-yellow-200 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4 text-white">
            Subscribe to our Newsletter
          </h3>
          <p className="text-orange-100 mb-4">
            Get the latest updates and offers.
          </p>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="px-4 py-2 bg-yellow-400 text-orange-700 font-bold rounded-r-lg hover:bg-yellow-300 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-yellow-100">
        © {new Date().getFullYear()} Testy Bites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
