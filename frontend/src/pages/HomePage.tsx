/* eslint-disable @typescript-eslint/no-explicit-any */
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Utensils, Bike, ShieldCheck, Clock, Leaf, Quote } from "lucide-react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import { useGetAllRestaurants } from "@/api/RestaurantApi";
import Section from "@/components/ui/Section";
import Cards from "./Cards";
import { Helmet } from "react-helmet-async";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage = () => {
  const navigate = useNavigate();
  const { restaurants } = useGetAllRestaurants();

  const handleSearchSubmit = (values: SearchForm) => {
    navigate(`/search/${values.searchQuery}`);
  };

  const handleCardClick = (restaurantId: string) => {
    navigate(`/detail/${restaurantId}`);
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

      {/* Promotional Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mx-4 md:mx-auto max-w-7xl w-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-2"
      >
        <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
          <span className="bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full w-fit mx-auto md:mx-0 backdrop-blur-md">
            Limited Time Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get 20% off your first order!
          </h2>
          <p className="text-orange-50 text-lg font-medium">
            Use code <strong className="bg-white text-orange-600 px-2 py-0.5 rounded-md mx-1 shadow-sm">WELCOME20</strong> at checkout and enjoy delicious meals at a fraction of the cost.
          </p>
        </div>
        <button 
          onClick={() => navigate("/restaurants")}
          className="bg-slate-900 text-white border-0 hover:bg-slate-800 px-10 py-4 text-lg rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 w-full md:w-auto whitespace-nowrap"
        >
          Claim Offer Now
        </button>
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
        ) : (
          <div className="w-full text-center py-10 text-gray-500">
            No featured restaurants available at the moment.
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
        className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-32 my-8"
      >
        <img
          src={landingImage}
          alt="Landing"
          className="rounded-lg shadow-md"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-extrabold text-4xl tracking-tighter text-slate-800">
            Order takeaway even faster!
          </span>
          <span className="text-slate-600 text-lg font-medium">
            Download the Testy & Bites App for faster ordering, live tracking, and personalised
            recommendations.
          </span>
          <img src={appDownloadImage} alt="Download App" className="mt-4 cursor-pointer hover:scale-105 transition-transform" />
        </div>
      </motion.div>

      {/* Join Us / Partnerships Section */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-0 grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 flex flex-col items-start justify-center gap-4 text-white relative overflow-hidden group shadow-xl"
        >
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-all duration-700"></div>
          <h3 className="text-3xl lg:text-4xl font-extrabold z-10 tracking-tight">Partner with Us</h3>
          <p className="text-slate-300 z-10 max-w-md text-lg">
            Join Testy & Bites and reach thousands of new customers. Grow your business with our industry-leading delivery network.
          </p>
          <button onClick={() => navigate("/manage-restaurant")} className="mt-4 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors z-10 shadow-md">
            Add Your Restaurant
          </button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-orange-50 rounded-3xl p-10 flex flex-col items-start justify-center gap-4 text-slate-900 relative overflow-hidden group shadow-sm border border-orange-100 hover:shadow-md transition-shadow"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl group-hover:bg-orange-400/40 transition-all duration-700"></div>
          <h3 className="text-3xl lg:text-4xl font-extrabold z-10 tracking-tight">Ride with Testy</h3>
          <p className="text-slate-600 z-10 max-w-md text-lg">
            Become a delivery partner and enjoy flexible working hours, competitive earnings, and full live support.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors z-10 shadow-md">
            Sign up to Deliver
          </button>
        </motion.div>
      </div>

      {/* Testimonials - Industry Standard Gorgeous Design */}
      <Section 
        title="What Our Customers Say" 
        subtitle="Trusted by thousands of happy foodies" 
        bgColor="bg-gradient-to-b from-white to-orange-50/50"
      >
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.6 } }
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group h-full"
            >
              <div className="h-full p-8 md:p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white/50 shadow-2xl shadow-orange-200/40 flex flex-col items-center text-center transition-all duration-300 hover:shadow-orange-300/40">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-[0.08] group-hover:opacity-10 transition-opacity">
                  <Quote className="w-12 h-12 text-slate-900 fill-slate-900" />
                </div>

                {/* Avatar with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  {review.avatar && (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg z-10"
                    />
                  )}
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`} 
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 italic text-lg leading-relaxed mb-6 font-medium">
                  "{review.text}"
                </p>

                {/* User Info */}
                <div className="mt-auto">
                  <span className="block font-black text-xl tracking-tight text-slate-900">
                    {review.name}
                  </span>
                  <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mt-1 block">
                    Verified Customer
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
