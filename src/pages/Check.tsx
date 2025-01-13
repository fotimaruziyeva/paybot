import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import Navbar from "./navbar"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { Button } from "@/components/ui/button"
import { RxReset } from "react-icons/rx";
import { useState, useEffect } from "react";

const Check = () => {
  const [counter, setCounter] = useState(60);
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => {
    setRefresh(!refresh);
    window.location.reload();
    setCounter(60);  
  };

  
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer); 
    }
  }, [counter]);

  return (
    <div className="w-full min-h-screen bg-[#272727] text-white">
      <Navbar />
      <h1 className="text-3xl text-white text-center mb-4">Confirmation Code</h1>
      <div className="max-w-xl mx-auto bg-[#3D3D3D] p-10 flex flex-col items-center justify-center gap-9 rounded-2xl mt-16">
        <p>Confirmation code has been sent to your number: 00:{counter < 10 ? `0${counter}` : counter}</p>
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup className="space-x-4">
            <InputOTPSlot className="w-16 h-16 text-3xl text-center border border-gray-600 rounded-lg" index={0} />
            <InputOTPSlot className="w-16 h-16 text-3xl text-center border border-gray-600 rounded-lg" index={1} />
            <InputOTPSlot className="w-16 h-16 text-3xl text-center border border-gray-600 rounded-lg" index={2} />
            <InputOTPSlot className="w-16 h-16 text-3xl text-center border border-gray-600 rounded-lg" index={3} />
          </InputOTPGroup>
        </InputOTP>
       
      </div>
      <div className="flex items-center justify-center mt-10 w-full ">
      <Button 
          onClick={handleClick} 
          className="pt-8 p-8  w-3/12 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600"
        >
          <span className="text-2xl font-mono mr-3 text-center">Resend Code</span>
          <RxReset />
        </Button>
      </div>
      
    </div>
  );
};

export default Check;
