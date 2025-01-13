import { Button } from "@/components/ui/button";
import { payment } from "@/constants";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoCashOutline, IoPerson } from "react-icons/io5";

import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
 const navigate = useNavigate();
 const ButtonOnclick=()=>{
   navigate("/click");
 }
  return (
    <div className="w-full bg-[#272727] mx-auto  text-white min-h-screen">
      <Navbar/>

      <div className="max-w- p-8 bg-[#3D3D3D] rounded-2xl mx-auto shadow-lg">
        <h1 className="text-3xl font-bold  text-yellow-400">Payment Methods</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          {payment.map((card) => (
            <div
              className="bg-[#272727]   rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-all duration-300"
              key={card.id}
            >
              <img src={card.image} alt="" className="mx-auto mb-4 w-30 h-20" />
              <span className="text-white font-semibold text-xl">{card.title}</span>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-yellow-400 mt-10 ml-10">Transaction Info</h1>
      <div className="p-8 mt-8 rounded-2xl bg-[#3D3D3D] shadow-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* O'yin */}
          <div className="flex items-center justify-between bg-[#272727]   border border-gray-600 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <IoLogoGameControllerB size={28} className="text-black" />
              </span>
              <span className="text-white text-lg font-medium">Game:</span>
            </div>
            <span className="text-white text-lg">PUBG MOBILE</span>
          </div>

          {/* Valyuta */}
          <div className="flex items-center justify-between bg-[#272727] border border-gray-600 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <IoCashOutline size={28} className="text-black" />
              </span>
              <span className="text-white text-lg font-medium">Currency:</span>
            </div>
            <span className="text-white text-lg">40500 UC</span>
          </div>

          {/* Amount */}
          <div className="flex items-center justify-between bg-[#272727] border border-gray-600 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <IoLogoGameControllerB size={28} className="text-black" />
              </span>
              <span className="text-white text-lg font-medium">Amount:</span>
            </div>
            <span className="text-white text-lg">5,800,000 UZS</span>
          </div>

          {/* Player ID */}
          <div className="flex items-center justify-between   bg-[#272727] border border-gray-600 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <IoPerson size={28} className="text-black" />
              </span>
              <span className="text-white text-lg font-medium">Player ID:</span>
            </div>
            <span className="text-white text-lg">521321321321</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <Button className="w-3/12 mb-10   p-10 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600" onClick={ButtonOnclick}>
          <span className="text-2xl font-mono mr-3">Continue</span>
          <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
