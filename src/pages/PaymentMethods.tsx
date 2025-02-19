import { Button } from '@/components/ui/button'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoLogoGameControllerB } from 'react-icons/io'
import { IoCashOutline, IoPerson } from 'react-icons/io5'
import backImage from '../../public/images/pubg-image.png'

import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'

const PaymentMethods = () => {
	const navigate = useNavigate()
	const ButtonOnclick = () => {
		navigate('/click')
	}
	return (
		<div className='w-full  mx-auto text-white min-h-screen relative'>
			<div className='w-full bg-gradient-to-t from-[#000000] via-[#1e1e1ef0] to-[#272727d1] mx-auto  text-white min-h-screen px-3 '>
				<Navbar langs={false} type='support' />

				<h1 className='text-xl  text-center font-bold text-white'>Transaction Info</h1>
				<div className='p-3 mt-10 rounded-2xl bg-[#3D3D3D] shadow-lg mx-auto flex flex-col gap-3'>
					
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
						{/* O'yin */}
						<div className='flex items-center justify-between bg-[#272727]   border border-gray-600 rounded-lg p-2'>
							<div className='flex items-center gap-2 p-1'>
								<span className='w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0px_4px_10px_2px_rgba(254,204,0,0.5)]'>
									<IoLogoGameControllerB size={18} className='text-black' />
								</span>
								<span className='text-white text-base font-medium'>Game:</span>
							</div>
							<span className='text-white text-base'>PUBG MOBILE</span>
						</div>

						{/* Valyuta */}
						<div className='flex items-center justify-between bg-[#272727] border border-gray-600 rounded-lg p-2'>
							<div className='flex items-center gap-2 p-1'>
								<span className='w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0px_4px_10px_2px_rgba(254,204,0,0.5)]'>
									<IoCashOutline size={18} className='text-black' />
								</span>
								<span className='text-white text-base font-medium'>
									Currency:
								</span>
							</div>
							<span className='text-white text-base'>40500 UC</span>
						</div>

						{/* Amount */}
						<div className='flex items-center justify-between bg-[#272727] border border-gray-600 rounded-lg p-2'>
							<div className='flex items-center gap-2 p-1'>
								<span className='w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0px_4px_10px_2px_rgba(254,204,0,0.5)]'>
									<IoLogoGameControllerB size={18} className='text-black' />
								</span>
								<span className='text-white text-base font-medium'>
									Amount:
								</span>
							</div>
							<span className='text-white text-base'>5,800,000 UZS</span>
						</div>

						{/* Player ID */}
						<div className='flex items-center justify-between   bg-[#272727] border border-gray-600 rounded-lg p-2'>
							<div className='flex items-center gap-2 p-1'>
								<span className='w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0px_4px_10px_2px_rgba(254,204,0,0.5)]'>
									<IoPerson size={18} className='text-black' />
								</span>
								<span className='text-white text-base font-medium'>
									Player ID:
								</span>
							</div>
							<span className='text-white text-base'>521321321321</span>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center mt-8'>
					<Button
						className='mb-10 w-full p-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600 text-base'
						onClick={ButtonOnclick}
					>
						Continue
						<FaArrowRightLong />
					</Button>
				</div>
			</div>
			<div className='absolute top-0 left-0 -z-10 w-screen h-screen'>
				<img src={backImage} alt='back_image' className='w-full h-full' />
			</div>
		</div>
	)
}

export default PaymentMethods
