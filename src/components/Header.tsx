import banner1 from "../assets/img/banner1.jpeg";
import banner2 from "../assets/img/banner2.jpeg";
import banner3 from "../assets/img/banner3.jpeg";

const images = [banner1, banner2, banner3];

export function Header({ title, type }) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={randomImage}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 ">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className="text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full ">
            Welcome to FlavorExchange, your passport to culinary adventures!
            <br className="hidden md:block" /> Discover a treasure trove of
            delectable recipes from around the globe.
          </p>
        )}
      </div>
    </div>
  );
}
