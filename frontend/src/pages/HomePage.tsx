/* eslint-disable @typescript-eslint/no-explicit-any */
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Utensils, Bike, ShieldCheck, Clock, Leaf } from "lucide-react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import { useGetAllRestaurants } from "@/api/RestaurantApi";
import Section from "@/components/ui/Section";
import Cards from "./Cards";
import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from "react-helmet-async";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage = () => {
  const navigate = useNavigate();
  const { restaurants } = useGetAllRestaurants();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleSearchSubmit = (values: SearchForm) => {
    navigate(`/search/${values.searchQuery}`);
  };

  const handleCardClick = (restaurantId: string) => {
    if (isAuthenticated) {
      navigate(`/detail/${restaurantId}`);
    } else {
      loginWithRedirect();
    }
  };

  const testimonials = [
    {
      name: "Alice",
      text: "Amazing food and super fast delivery!",
      rating: 5,
      avatar: avatar1,
    },
    {
      name: "Bob",
      text: "The best curry in town. Highly recommend!",
      rating: 4,
      avatar: avatar2,
    },
    {
      name: "Charlie",
      text: "Fresh meals and excellent service. I wish everyone try this!",
      rating: 5,
      avatar: avatar3,
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <Helmet>
        <title>Testy & Bites</title>
      </Helmet>
      {/* Hero Search Box */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="glass rounded-3xl p-8 md:p-12 flex flex-col gap-6 text-center -mt-32 relative z-10 border border-white/40 shadow-2xl mx-2 md:mx-0"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 drop-shadow-sm">
          Takeaway made simple
        </h1>
        <span className="text-xl text-slate-700 font-medium tracking-wide">
          Your favorite food, just a click away!
        </span>
        
        <div className="mt-4 shadow-xl rounded-full overflow-hidden">
          <SearchBar
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
      </motion.div>

      {/* Featured Restaurants Section */}
      <Section title="Featured Restaurants" subtitle="Hand-picked just for you">
        {restaurants && restaurants.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {restaurants.slice(0, 4).map((res: any) => (
              <motion.div
                key={res._id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Cards
                  name={res.restaurantName}
                  image={res.imageUrl}
                  onClick={() => handleCardClick(res._id)}
                />
              </motion.div>
            ))}
          </div>
        ) : isAuthenticated ? (
          <div className="w-full text-center py-10 text-gray-500">
            No featured restaurants available at the moment.
          </div>
        ) : (
          <div className="w-full text-center py-10 text-gray-500">
            Login to see all restaurant
          </div>
        )}
      </Section>

      <div className="flex justify-center -mt-8 mb-8">
        <button
          onClick={() => navigate("/restaurants")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-extrabold transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 text-lg"
        >
          Browse All Restaurants
        </button>
      </div>

      {/* How it Works Section */}
      <Section title="How It Works" subtitle="Get your food in 3 simple steps" bgColor="bg-white rounded-3xl mx-4 md:mx-0 shadow-sm border border-slate-100">
        <div className="grid md:grid-cols-3 gap-10 px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-orange-100 p-6 rounded-full">
              <MapPin className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">1. Set Location</h3>
            <p className="text-slate-600 font-medium">Enter your address or let us find your location to see restaurants delivering to you.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 relative">
            <div className="hidden md:block absolute top-12 -left-12 w-24 h-0.5 bg-orange-200 border-t-2 border-dashed border-orange-300"></div>
            <div className="bg-orange-100 p-6 rounded-full relative z-10">
              <Utensils className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">2. Choose Food</h3>
            <p className="text-slate-600 font-medium">Browse menus, read reviews, and select your favorite meals from top-rated spots.</p>
            <div className="hidden md:block absolute top-12 -right-12 w-24 h-0.5 bg-orange-200 border-t-2 border-dashed border-orange-300"></div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-orange-100 p-6 rounded-full">
              <Bike className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">3. Fast Delivery</h3>
            <p className="text-slate-600 font-medium">Sit back and relax. Our delivery partners will bring your food piping hot and fresh.</p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section title="Why Choose Us?" subtitle="What makes Testy & Bites special">
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-lg transition-shadow">
            <ShieldCheck className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Secure Payments</h3>
            <p className="text-slate-600 font-medium">Your data and payments are 100% safe with our industry-leading Stripe integration.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-lg transition-shadow">
            <Leaf className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Fresh Ingredients</h3>
            <p className="text-slate-600 font-medium">We partner strictly with restaurants that maintain standard health and fresh food policies.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-lg transition-shadow">
            <Clock className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Fastest Delivery</h3>
            <p className="text-slate-600 font-medium">Our optimized delivery routing ensures your food arrives exactly when expected.</p>
          </motion.div>
        </div>
      </Section>

      {/* Landing Image + App Download */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-32"
      >
        <img
          src={landingImage}
          alt="Landing"
          className="rounded-lg shadow-md"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span className="text-gray-700">
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} alt="Download App" className="mt-4" />
        </div>
      </motion.div>

      {/* Testimonials (Always visible) */}
      <Section title="What Our Customers Say" bgColor="bg-white">
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-80 p-6 bg-orange-50 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                {review.avatar && (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                )}
                <p className="text-gray-700 mb-4 text-center">
                  "{review.text}"
                </p>
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <span className="block text-center font-bold text-orange-500">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
