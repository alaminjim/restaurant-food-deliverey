// src/components/Section.tsx

import { motion } from "framer-motion";

type SectionProps = {
  title: string;
  subtitle?: string;
  bgColor?: string;
  children: React.ReactNode;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({
  title,
  subtitle,
  bgColor = "bg-white",
  children,
}: SectionProps) => {
  return (
    <motion.section
      className={`${bgColor} py-16`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}
        <div className="flex flex-wrap justify-center gap-6">{children}</div>
      </div>
    </motion.section>
  );
};

export default Section;
