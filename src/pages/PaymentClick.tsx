"use client";
import { Input } from "@/components/ui/input";
import Navbar from "./navbar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PaymentClick = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate(); // To‘g‘ri olingan `useNavigate`

  const handleContinue = () => {
    if (!cardNumber.match(/^\d{16}$/)) {
      toast({
        title: "Xatolik",
        description: "Karta raqami 16 xonali bo‘lishi kerak.",
        variant: "destructive",
      });
      return;
    }
    if (!date) {
      toast({
        title: "Xatolik",
        description: "Amal qilish muddatini tanlang.",
        variant: "destructive",
      });
      return;
    }

    setTimeout(() => {
      navigate("/"); 
    }, 1500); 
  };

  return (
    <div className="w-full min-h-screen  bg-gray-900 text-white">
      <Navbar />
      <div className="flex items-center justify-center flex-col mt-28">
        <h1 className="max-w-md mx-auto mt-5 mb-2 text-2xl text-yellow-400">
          Payment informations
        </h1>
        <div className="w-full max-w-xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg">
          <div className="mb-6">
            <Label className="text-yellow-400">Card Number</Label>
            <Input
              type="tel"
              placeholder="0000 0000 0000 0000"
              pattern="[0-9]{16}"
              className="w-full p-5 bg-gray-700 text-white border border-gray-600 rounded-lg"
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Label className="text-yellow-400">Expiration Date:</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"secondary"}
                  className={cn(
                    "w-full justify-start text-left font-normal p-5",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>mm-yyyy</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="flex w-auto flex-col space-y-2 p-2"
              >
                <div className="rounded-md border">
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Button
            className="w-full p-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600"
            onClick={handleContinue}
          >
            <span className="text-2xl font-mono mr-3 text-center">Continue</span>
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentClick;
