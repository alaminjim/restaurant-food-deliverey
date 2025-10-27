// src/components/Card.tsx

export type CardProps = {
  name: string;
  image?: string;
  onClick?: () => void;
};

const Cards: React.FC<CardProps> = ({ name, image, onClick }) => {
  return (
    <div
      className="w-64 h-48 rounded-2xl overflow-hidden shadow-md cursor-pointer relative hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
      onClick={onClick}
    >
      {image && (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

      {/* Name Overlay */}
      <div className="absolute bottom-2 left-0 w-full text-center">
        <h3 className="text-white font-bold text-lg px-2">{name}</h3>
      </div>
    </div>
  );
};

export default Cards;
