import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";
import { IoGameController, IoGift } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Card } from "@/constants";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type CustomDotsItem = {
  isActive: boolean;
  [key: string]: any;
};

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <div className="relative w-full sm:h-[650px] h-72 overflow-hidden">
    <img
      src="/images/pubg1.jpeg"
      alt="PUBG"
      className="w-[99%] m-auto min-h-full aspect-video object-cover rounded-lg"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000075] via-[#00000045] to-[#00000000] flex flex-col justify-end gap-3 sm:px-10 sm:pb-10 p-5">
      <h1 className="sm:text-7xl text-xl font-semibold ">PUBG mobile</h1>
      <p className="text-sm ">o'yini uchun to'lovni amalga oshiring</p>
    </div>
  </div>,
  <div className="relative w-full sm:h-[650px] h-72 overflow-hidden">
    <img
      src="/images/pubg1.jpeg"
      alt="PUBG"
      className="w-[99%] m-auto min-h-full aspect-video object-cover rounded-lg"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000075] via-[#00000045] to-[#00000000] flex flex-col justify-end gap-3 sm:px-10 sm:pb-10 p-5">
      <h1 className="sm:text-7xl text-xl font-semibold ">PUBG mobile</h1>
      <p className="text-sm ">o'yini uchun to'lovni amalga oshiring</p>
    </div>
  </div>,
  <div className="relative w-full sm:h-[650px] h-72 overflow-hidden">
    <img
      src="/images/pubg1.jpeg"
      alt="PUBG"
      className="w-[99%] m-auto min-h-full aspect-video object-cover rounded-lg"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000075] via-[#00000045] to-[#00000000] flex flex-col justify-end gap-3 sm:px-10 sm:pb-10 p-5">
      <h1 className="sm:text-7xl text-xl font-semibold ">PUBG mobile</h1>
      <p className="text-sm ">o'yini uchun to'lovni amalga oshiring</p>
    </div>
  </div>,
];

const Home = () => {
  const renderDotsItem = (e: CustomDotsItem) => {
    return (
      <button
        className={`w-2 h-2 mx-1 rounded-full -translate-y-16 ${
          e.isActive ? "bg-yellow-500" : "bg-white"
        }`}
        onClick={() => console.log(`Dot clicked`)}
      >
        {e.index ? e.index + 1 : ""}
      </button>
    );
  };

  return (
    <div className="w-full h-full bg-[#272727] text-white flex flex-col items-center px-3">
      {/* Navbar */}
      <nav className="text-white w-full flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to={"/"} className="cursor-pointer">
            <img src="/images/logo.png" alt="Logo" className="mr-8 mt-2" />
          </Link>
        </div>
        <Link to={"/profile"}>
          <FaRegUserCircle className="w-8 h-8 sm:w-12 sm:h-12" />
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="  w-full flex items-center justify-center relative mt-5">
        <div className="bg-gradient-to-t from-[#27272795] via-[#27272750] to-[#27272701] w-full h-full">
          <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            infinite
            autoPlay
            autoPlayInterval={3000}
            animationDuration={2000}
            renderDotsItem={renderDotsItem}
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center justify-center gap-4 p-2 bg-gray-700 w-full  rounded-xl -translate-y-10">
        <Button className="flex items-center justify-center w-1/2 h-10 px-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-base ">
          <IoGameController className="text-2xl sm:text-3xl mr-2" />
          <Link to={"/game"} className="font-bold text-base sm:text-xl">
            Game
          </Link>
        </Button>

        <Button className="flex items-center justify-center w-1/2 h-10 px-4 hover:bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-base ">
          <IoGift className="text-2xl sm:text-3xl mr-2" />
          <Link to={"/gift"} className="font-bold text-base sm:text-xl">
            Gift
          </Link>
        </Button>
      </div>
      <br />

      {/* Search and Games Section */}
      <div className=" w-full   flex flex-col items-center bg-[#3D3D3D] sm:px-10 sm:py-8 p-5 space-y-8 rounded-lg -translate-y-14">
        {/* Search Input */}
        <div className="w-full flex sm:mt-10 items-center relative">
          <Input
            type="text"
            className="p-3 sm:p-8 bg-[#272727] border-none rounded-lg w-full"
          />
          <BiSearch
            className="absolute right-4 sm:right-6 text-white sm:text-3xl text-xl"
            size={24}
          />
        </div>

        {/* Games Grid */}
        <div className="w-full text-center space-y-6">
          <h1 className="sm:text-3xl text-xl md:text-4xl font-bold">Games</h1>

          <div className="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-screen-2xl mx-auto small-width">
            {Card.map((card) => (
              <Link to={"/service"}>
                <div
                  className="card bg-[#272727] rounded-lg shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-all"
                  key={card.id}
                >
                  <img
                    src={card.image}
                    alt=""
                    className="w-36 h-1/2 sm:w-44  mx-auto mb-3 sm:mb-4 rounded-lg"
                  />
                  <span className="text-white text-base sm:text-xl font-bold">
                    {card.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Button className="w-60 sm:w-64 mb-5 h-10 sm:h-16 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg text-base sm:text-xl">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
