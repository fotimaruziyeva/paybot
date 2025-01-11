"use client"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "./navbar"

// Service data array for mapping
const serviceList = [
  { id: 1, price: "48500 UZ", amount: "5 000 000" },
  { id: 2, price: "48500 UZ", amount: "5 000 000" },
  { id: 3, price: "48500 UZ", amount: "5 000 000" },
  { id: 4, price: "48500 UZ", amount: "5 000 000" },
  { id: 5, price: "48500 UZ", amount: "5 000 000" },
  { id: 6, price: "48500 UZ", amount: "5 000 000" },
  { id: 7, price: "48500 UZ", amount: "5 000 000" },
  { id: 8, price: "48500 UZ", amount: "5 000 000" },

]
import { GoChevronDown } from "react-icons/go";
export function Service() {
  return (
    <div className="w-full  mx-auto bg-gray-900 text-white min-h-screen">
      <Navbar/>
      <div className="w-full max-w-xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg ">
        <Label>Packages </Label>
        <Drawer>
      <DrawerTrigger asChild>
      <div className="relative">
  <Input type="button" value="Service" className="pl-8" />
  <GoChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
</div>

      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Service List </DrawerTitle>
            <DrawerDescription>Choose your service and adjust the goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
      
            {/* Service List */}
            <div className="mt-3">
              <div className="grid grid-cols-2 gap-4">
                {serviceList.map((service) => (
                  <div
                    key={service.id}
                    className="flex justify-center items-center border p-4 rounded-lg shadow-lg bg-yellow-400 text-white"
                  >
                    <span>{service.price} - {service.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer> 
    <div>
      <Label>User id</Label>
      <Input></Input>
    </div>
      </div>
      
    </div>
   
  )
}
