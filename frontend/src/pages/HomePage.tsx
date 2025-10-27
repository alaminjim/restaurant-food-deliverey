/* eslint-disable @typescript-eslint/no-explicit-any */
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avarat3.jpg";
import { useGetAllRestaurants } from "@/api/MyRestaurantApi";
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
  const { isAuthenticated } = useAuth0();

  const handleSearchSubmit = (values: SearchForm) => {
    navigate(`/search/${values.searchQuery}`);
  };

  const handleCardClick = (restaurantId: string) => {
    if (isAuthenticated) {
      navigate(`/detail/${restaurantId}`);
    } else {
      navigate("/login");
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
      {/* Hero + Search */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="md:px-32 bg-white rounded-lg shadow-md py-12 flex flex-col gap-5 text-center -mt-16"
      >
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
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
