import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative h-[550px] w-full overflow-hidden">
      <img src={hero} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-slate-900/40"></div>
    </div>
  );
};

export default Hero;
