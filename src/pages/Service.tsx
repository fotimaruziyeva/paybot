"use client"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "./navbar"
import { TbCube } from "react-icons/tb";

import { GoChevronDown } from "react-icons/go";
import { serviceList } from "@/constants"
import { Button } from "@/components/ui/button"
import { FaArrowRightLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"


export function Service() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <div className="w-full  mx-auto bg-[#272727] text-white min-h-screen">
      <Navbar/>
      <div className="w-full flex flex-col gap-4 max-w-xl mx-auto p-10 bg-[#3D3D3D] rounded-xl shadow-lg ">
        <Label>Packages </Label>
        <Drawer>
      <DrawerTrigger asChild>
      <div className="relative">
  <Input type="button" value="Service" className="pl-6 " />
  <GoChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
</div>

      </DrawerTrigger>
      <DrawerContent className=" bg-[#272727] text-white">
        <div className="mx-auto max-w-xl ">
          <DrawerHeader>
            <DrawerTitle>Service List </DrawerTitle>
            <DrawerDescription>Choose your service and adjust the goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
      
            {/* Service List */}
            <div className="mt-3">
              <div className="grid grid-cols-2 gap-4 ">
                {serviceList.map((service) => (
                  <div
                    key={service.id}
                    className="flex justify-center cursor-pointer items-center flex-col border p-8 rounded-lg shadow-lg bg-[#3D3D3D] text-white"
                  >
                    <span className="w-12 h-12 bg-[#fecc00] rounded-full flex items-center justify-center"><TbCube/></span>
                    <span>{service.price} - {service.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer> 
    <div>
      <Label>User id</Label>
      <Input className="p-6"></Input>
    </div>
   
      </div>
     <div className="flex items-center justify-center mt-8">
  <Button
    className="w-full sm:w-8/12 md:w-6/12 lg:w-3/12 p-4 sm:p-6 lg:p-10 mb-10 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600"
    onClick={handleClick}
  >
    <span className="text-lg sm:text-xl lg:text-2xl font-mono mr-3">Continue</span>
    <FaArrowRightLong />
  </Button>
</div>

    </div>
   
  )
}
