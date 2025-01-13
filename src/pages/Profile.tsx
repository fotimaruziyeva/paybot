import { FaArrowLeftLong } from "react-icons/fa6";
import "../index.css";
import { Link } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="w-full bg-[#272727] text-white min-h-screen px-10">
  <div className="flex items-center justify-between px-5 py-5">
    <Link to={"/"} className="cursor-pointer">
      <span className="text-white text-2xl">
        <FaArrowLeftLong />
      </span>
    </Link>
    <h1 className="text-2xl">Profile</h1>
    <span className="w-8"></span>
  </div>
  <div className="w-full  flex items-center justify-center flex-col my-5">
    <img
      src="/images/user.png"
      alt="Profile"
      className="w-32 h-32 rounded-full object-cover mb-3"
    />
    <h3>Sardor Jumanazarov</h3>
    <span>+998 90 999 99 00</span>
  </div>
  <div className="w-full mt-5">
    <Link to={"/support"} className="w-full">
      <button className="w-full p-4 rounded-xl flex items-center justify-between bg-[#272727] border border-gray-400">
        <span className="w-12 h-12 bg-[#fecc00] rounded-2xl flex items-center justify-center shadow-[0px_4px_10px_2px_rgba(254,204,0,0.5)]">
          <MdSupportAgent size={42} />
        </span>
        <span>Support</span>
        <span>
          <FaChevronRight size={24} />
        </span>
      </button>
    </Link>
  </div>
  <h1 className="text-2xl mt-5">Language</h1>
  <div className="w-full flex items-center justify-center gap-4 p-2 bg-gray-700 rounded-xl">
    <div className="w-full flex flex-row sm:flex-row gap-4">
      <Button className="flex items-center justify-center w-full h-12 px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all">
        <Link to={"/game"} className="font-bold">
          EN
        </Link>
      </Button>
      <Button className="flex items-center justify-center w-full h-12 px-4 py-2 hover:bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all">
        <Link to={"/gift"} className="font-bold">
          UZ
        </Link>
      </Button>
      <Button className="flex items-center justify-center w-full h-12 px-4 py-2 hover:bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all">
        <Link to={"/gift"} className="font-bold">
          RU
        </Link>
      </Button>
    </div>
  </div>
</div>

  );
};

export default Profile;
