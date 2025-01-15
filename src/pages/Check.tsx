import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import Navbar from './navbar'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { Button } from '@/components/ui/button'
import { RxReset } from 'react-icons/rx'
import { useState, useEffect } from 'react'
import backImage from '../../public/images/pubg-image.png'

const Check = () => {
	const [counter, setCounter] = useState(60)
	const [refresh, setRefresh] = useState(false)

	const handleClick = () => {
		setRefresh(!refresh)
		window.location.reload()
		setCounter(60)
	}

	useEffect(() => {
		if (counter > 0) {
			const timer = setTimeout(() => setCounter(counter - 1), 1000)
			return () => clearTimeout(timer)
		}
	}, [counter])

	return (
		<div className='w-full  mx-auto text-white min-h-screen relative'>
			<div className='w-full min-h-screen bg-gradient-to-t from-[#000000] via-[#1e1e1ef0] to-[#272727d1] text-white px-3'>
				<Navbar langs={true} type='back' />
				<h1 className='text-xl text-white  text-left w-full mt-3'>
					Confirmation Code
				</h1>
				<div className='max-w-xl mx-auto bg-[#3D3D3D] p-4 flex flex-col items-center justify-center gap-9 rounded-2xl mt-3'>
					<p className='text-sm text-center'>
						Confirmation code has been sent to your number: 00:
						{counter < 10 ? `0${counter}` : counter}
					</p>
					<InputOTP
						maxLength={4}
						pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
						className='w-full'
					>
						<InputOTPGroup className='w-full flex items-center gap-3 px-3'>
							<InputOTPSlot
								className='w-16 h-16 text-3xl text-center border border-gray-600 rounded-2xl bg-[#272727]'
								index={0}
							/>
							<InputOTPSlot
								className='w-16 h-16 text-3xl text-center border border-gray-600 rounded-2xl bg-[#272727]'
								index={1}
							/>
							<InputOTPSlot
								className='w-16 h-16 text-3xl text-center border border-gray-600 rounded-2xl bg-[#272727]'
								index={2}
							/>
							<InputOTPSlot
								className='w-16 h-16 text-3xl text-center border border-gray-600 rounded-2xl bg-[#272727]'
								index={3}
							/>
						</InputOTPGroup>
					</InputOTP>
				</div>
				<div className='flex items-center justify-center mt-10 w-full '>
					<Button
						onClick={handleClick}
						className='p-6 w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600 text-base'
					>
						Resend Code
						<RxReset />
					</Button>
				</div>
			</div>
			<div className='absolute top-0 left-0 -z-10 w-screen h-screen'>
				<img src={backImage} alt='back_image' className='w-full h-full' />
			</div>
		</div>
	)
}

export default Check
