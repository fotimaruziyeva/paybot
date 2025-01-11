import { FaArrowLeftLong } from "react-icons/fa6";
import "../index.css";
import { Link } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white min-h-screen">
      <div className="flex items-center justify-between px-5 py-5">
        <Link to={"/"} className="cursor-pointer">
          <span className=" text-white text-2xl">
            <FaArrowLeftLong />
          </span>
        </Link>
        <h1 className="text-2xl mt-7 mb-10">Profile</h1>
        <span className="w-8"></span>
      </div>
      <div className="user flex items-center justify-center flex-col">
        <img
          src="/images/user.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
        />
        <h3>Sardor Jumanazarov</h3>
        <span>+998 90 999 99 00</span>
      </div>
      <div className="max-w-lg mx-auto mt-5 flex items-center justify-center">
        <Link to={"/support"}>
          <button className="max-w-xl p-4 rounded-xl flex items-center justify-center gap-40 bg-[#272727] border border-gray-400">
            <span className="w-12 h-12 bg-[#fecc00] rounded ">
              <MdSupportAgent size={42} className="text-center" />
            </span>
            <span>Support</span>
            <span>
              <FaChevronRight size={24} />
            </span>
          </button>
        </Link>
      </div>
      <h1 className=" text-2xl mt-5 ml-10">Language</h1>
      <div className="flex items-center justify-center gap-4 p-2 bg-gray-700 max-w-lg mx-auto rounded-xl">
        <div className="flex flex-row gap-4 w-full h-auto">
          <Button className="flex flex-row items-center justify-center w-full h-12 px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all">
            <Link to={"/game"} className="font-bold">
              EN
            </Link>
          </Button>

          <Button className="flex flex-row items-center justify-center w-full h-12 px-4 py-2 hover:bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all">
            <Link to={"/gift"} className="font-bold">
              UZ
            </Link>
          </Button>
          {/*  */}
          <Button className="flex flex-row items-center justify-center w-full h-12 px-4 py-2 hover:bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all">
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
