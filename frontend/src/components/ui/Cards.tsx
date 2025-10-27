// src/components/Card.tsx

import { motion } from "framer-motion";

type CardProps = {
  name: string;
  image?: string;
};

const Cards = ({ name, image }: CardProps) => {
  return (
    <motion.div
      className="w-80 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-3 cursor-pointer overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.07 }}
      viewport={{ once: true }}
    >
      {image && (
        <div className="relative">
          <img src={image} alt={name} className="w-full h-56 object-cover" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {/* Name text */}
          <h3 className="absolute bottom-4 left-4 text-white text-2xl font-extrabold drop-shadow-lg">
            {name}
          </h3>
        </div>
      )}
    </motion.div>
  );
};

export default Cards;
