import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";
import { IoGameController, IoGift } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Card } from "@/constants";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";
const Home = () => {
  return (
    <div className="w-full h-full bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white flex justify-around mx-auto items-center px-4 py-2">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="w-20 h-12 mr-2" />
        </div>
        <Link to={"/profile"}>
          <FaRegUserCircle className="w-8 h-8 sm:w-10 sm:h-10" />
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto w-full flex items-center justify-center relative mt-5">
        <img
          src="/images/pubg1.jpeg"
          alt="PUBG"
          className="w-full h-screen object-coversm:h-96  rounded-lg"
        />
      </div>
      <br />

      {/* Buttons Section */}
      <div className="flex items-center justify-center gap-4 p-2 bg-gray-700 max-w-md mx-auto rounded-xl">
        <Button className="flex items-center justify-center w-1/2 h-12 px-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transition-all">
          <IoGameController className="text-xl sm:text-2xl mr-2" />
          <Link to={"/game"} className="font-bold text-sm sm:text-base">
            Game
          </Link>
        </Button>

        <Button className="flex items-center justify-center w-1/2 h-12 px-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-lg hover:scale-105 transition-all">
          <IoGift className="text-xl sm:text-2xl mr-2" />
          <Link to={"/gift"} className="font-bold text-sm sm:text-base">
            Gift
          </Link>
        </Button>
      </div>
      <br />

      {/* Search and Games Section */}
      <div className="container  flex flex-col items-center justify-center">
        {/* Search Input */}
        <div className="w-11/12 sm:w-2/3 lg:w-1/3 mx-auto p-4 flex items-center relative">
          <Input
            type="text"
            className="p-3 sm:p-7 bg-gray-800 border-none rounded-lg w-full"
          />
          <BiSearch className="absolute right-4 sm:right-8 text-white" size={25} />
        </div>

        {/* Games Grid */}
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center">Games</h1>
          <br />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {Card.map((card) => (
              <div
                className="card bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-all"
                key={card.id}
              >
                <img
                  src={card.image}
                  alt=""
                  className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3 sm:mb-4 rounded-lg"
                />
                <span className="text-white text-sm sm:text-lg font-bold">
                  {card.title}
                </span>
              </div>
            ))}
          </div>
          <br />

          {/* View More Button */}
          <div className="flex items-center justify-center text-center">
            <Button className="w-40 sm:w-48 h-12 sm:h-14 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-110 transform transition-all">
              View More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
