import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-930 text-slate-300 pt-16 pb-8 border-t border-slate-800" style={{ backgroundColor: '#0f172a' }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm md:text-base">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <span className="text-4xl font-extrabold tracking-tight hover:text-orange-400 transition-colors duration-300 cursor-pointer text-white">
            Testy Bites
          </span>
          <p className="mt-4 text-slate-400 font-medium">
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
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-slate-400 font-medium">
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
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
            Subscribe
          </h3>
          <p className="text-slate-400 mb-6">
            Get the latest updates and exclusive offers.
          </p>
          <div className="flex w-full max-w-sm group">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-l-xl bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-slate-700 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-r-xl hover:bg-orange-600 active:scale-95 transition-all shadow-lg hover:shadow-orange-500/25">
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
