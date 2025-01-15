import { Button } from "@/components/ui/button";
import Navbar from "./navbar"
import { BsGiftFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const SucessPage = () => {
  const navigate = useNavigate()
	const ButtonOnclick = () => {
		navigate('/')
	}
  return (
    <div className="w-full p-4 mx-auto text-white min-h-screen relative">
      <Navbar langs={true} type="back" />      
      <div className="w-full p-20 mt-10  rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-500  shadow-lg mx-auto flex flex-col gap-3">
        <div className="flex items-center justify-center flex-col gap-4">
        <BsGiftFill className="w-10 h-12"/>
        <h2 className="text-xl font-bold text-center">СПАСИБО ЗА ПОКУПКУ!</h2>
        </div>
      </div>
      <div className='flex items-center justify-center mt-8'>
					<Button
						className='mb-10 w-full p-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600 text-base'
						onClick={ButtonOnclick}
					>
						HomePage
						<FaArrowRightLong />
					</Button>
				</div>
    </div>
  )
}

export default SucessPage
