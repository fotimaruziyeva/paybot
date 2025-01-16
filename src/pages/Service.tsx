"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "./navbar";
import { TbCube } from "react-icons/tb";

import { GoChevronDown } from "react-icons/go";
import { payment, serviceList } from "@/constants";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import backImage from "../../public/images/pubg-image.png";

export function Service() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <div className="w-full  mx-auto overflow-hidden text-white min-h-screen relative">
      <div className="bg-gradient-to-t from-[#000000] via-[#1e1e1ef0] to-[#272727d1] sm:px-10 p-3 min-h-screen overflow-hidden">
        <Navbar langs={false} type="back" />
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl my-3 text-center w-full">Service</h1>
          <div className="w-full flex flex-col gap-2 max-w-xl mx-auto p-5 bg-[#3D3D3D] rounded-xl shadow-lg border border-solid border-[#fafafa50]">
            <Label>Packages </Label>
            <Drawer>
              <DrawerTrigger asChild>
                <div className="relative">
                  <Input
                    type="button"
                    value="Service"
                    className="pl-6 bg-[#272727] border-none mt-0"
                  />
                  <GoChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-[#272727] text-white">
        <div className="h-full">
       <DrawerHeader className="p-6">
        <DrawerTitle className="text-left text-2xl">Service List</DrawerTitle>
       </DrawerHeader>
       <div className="p-4 pb-0 h-[calc(100vh-100px)] overflow-y-auto">
      {/* Service List */}
      <div className="mt-3">
        <div className="grid grid-cols-2 gap-4">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="flex gap-3 justify-center cursor-pointer items-center flex-col border py-4 px-3 rounded-lg shadow-lg bg-[#3D3D3D] text-white"
            >
              <span className="w-12 h-12 bg-[#fecc00] rounded-full flex items-center justify-center shadow-[0px_4px_10px_2px_rgba(254,204,0,0.5)]">
                <TbCube className="text-2xl" />
              </span>
              <span className="text-sm">
                {service.price} - {service.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</DrawerContent>

            </Drawer>
            <div className="flex flex-col gap-2 mt-2">
              <Label>User id</Label>
              <Input
                className="px-3 py-2 bg-[#272727] border-none"
                placeholder="00 00 00 00 00"
              ></Input>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2 p-4 bg-[#3D3D3D] rounded-2xl max-w-xl mx-auto shadow-lg">
            <h1 className="text-2xl font-bold text-white">Payment methods</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
              {payment.map((card) => (
                <div
                  className={
                    "p-[1px] from-yellow-400 via-orange-400 to-pink-600 rounded-xl hover:bg-gradient-to-br hover:scale-105  transition-all duration-300"
                  }
                >
                  <div
                    className="bg-[#272727] rounded-xl shadow-lg p-3 text-center "
                    key={card.id}
                  >
                    <img
                      src={card.image}
                      alt=""
                      className="mx-auto mb-4 w-30 h-10"
                    />
                    <span className="text-white font-semibold text-sm">
                      {card.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 max-w-xl w-full ">
            <Button
              className="p-4 sm:p-6  mb-10 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600  text-base w-full"
              onClick={handleClick}
            >
              Continue
              <FaArrowRightLong size={16} />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <img src={backImage} alt="back_image" className="w-full h-full" />
      </div>
    </div>
  );
}
