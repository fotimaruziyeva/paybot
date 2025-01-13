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
    <div className="w-full h-full bg-[#272727] text-white flex flex-col items-center px-10">
  {/* Navbar */}
  <nav className="text-white w-full flex justify-between items-center py-4">
    <div className="flex items-center">
      <Link to={"/"} className="cursor-pointer">
        <img src="/images/logo.png" alt="Logo" className="mr-8 mt-2" />
      </Link>
    </div>
    <Link to={"/profile"}>
      <FaRegUserCircle className="w-10 h-10 sm:w-12 sm:h-12" />
    </Link>
  </nav>

  {/* Hero Section */}
  <div className="container mx-auto w-full flex items-center justify-center relative mt-5">
    <img
      src="/images/pubg1.jpeg"
      alt="PUBG"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>

  <br />

  {/* Buttons Section */}
  <div className="flex items-center justify-center gap-4 p-2 bg-gray-700 w-full rounded-xl">
    <Button className="flex items-center justify-center w-1/2 h-14 px-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg ">
      <IoGameController className="text-2xl sm:text-3xl mr-2"/>
      <Link to={"/game"} className="font-bold text-xl sm:text-2xl">
        Game
      </Link>
    </Button>

    <Button className="flex items-center justify-center w-1/2 h-14 px-4 hover:bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-lg ">
      <IoGift className="text-2xl sm:text-3xl mr-2" />
      <Link to={"/gift"} className="font-bold text-xl sm:text-2xl">
        Gift
      </Link>
    </Button>
  </div>
  <br />

  {/* Search and Games Section */}
  <div className="container mx-auto flex flex-col items-center bg-[#3D3D3D] px-10 py-8 space-y-8 rounded-lg">
    {/* Search Input */}
    <div className="w-full flex mt-10 items-center relative">
      <Input
        type="text"
        className="p-4 sm:p-6 bg-[#272727] border-none rounded-lg w-full"
      />
      <BiSearch className="absolute right-4 sm:right-6 text-white" size={30} />
    </div>

    {/* Games Grid */}
    <div className="w-full text-center space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold">Games</h1>


      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-screen-2xl mx-auto">
        {Card.map((card) => (
          <Link to={'/service'}>
          <div
            className="card bg-[#272727] rounded-lg shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-all"
            key={card.id}
          >
            <img
              src={card.image}
              alt=""
              className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-3 sm:mb-4 rounded-lg"
            />
            <span className="text-white text-lg sm:text-xl font-bold">
              {card.title}
            </span>
          </div>
          </Link>
        ))}
      </div>
    </div>

    {/* View More Button */}
    <div className="flex justify-center">
      <Button className="w-60 sm:w-64 mb-5 h-14 sm:h-16 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg text-lg sm:text-xl">
        View More
      </Button>
    </div>
  </div>
</div>

  );
};

export default Home;
