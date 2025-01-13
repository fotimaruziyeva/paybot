'use client'
import { Input } from '@/components/ui/input'
import Navbar from './navbar'
import { Label } from '@/components/ui/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { useToast } from '@/hooks/use-toast'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import backImage from '../../public/images/pubg-image.png'

const PaymentClick = () => {
	const [date, setDate] = useState<Date>()
	const [cardNumber, setCardNumber] = useState('')
	const { toast } = useToast()
	const navigate = useNavigate()

	const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, '')
		if (value.length > 16) return
		const formattedValue = value.replace(/(.{4})/g, '$1 ').trim()
		setCardNumber(formattedValue)
	}

	const handleContinue = () => {
		const cleanCardNumber = cardNumber.replace(/\s/g, '')
		if (cleanCardNumber.length !== 16) {
			toast({
				title: 'Xatolik',
				description: 'Karta raqami 16 xonali bo‘lishi kerak.',
				variant: 'destructive',
			})
			return
		}
		if (!date) {
			toast({
				title: 'Xatolik',
				description: 'Amal qilish muddatini tanlang.',
				variant: 'destructive',
			})
			return
		}

		setTimeout(() => {
			navigate('/check')
		}, 1500)
	}

	return (
		<div className='w-full  mx-auto text-white min-h-screen relative'>
			<div className='w-full min-h-screen bg-gradient-to-t from-[#000000] via-[#1e1e1ef0] to-[#272727d1] text-white sm:p-10 p-3'>
				<Navbar langs={true} />
				<div className='flex items-center justify-center flex-col gap-2'>
					<h1 className='mx-auto mt-5 mb-2 sm:text-2xl text-2xl text-left w-full text-white'>
						Payment informations
					</h1>
					<div className='w-full max-w-4xl mx-auto p-3 bg-[#3D3D3D] rounded-xl shadow-lg flex flex-col gap-3'>
						<div className='flex flex-col gap-2'>
							<Label className='text-white sm:text-base text-sm'>
								Card Number
							</Label>
							<Input
								type='tel'
								placeholder='0000 0000 0000 0000'
								className='w-full p-3 bg-[#272727] border-none sm:text-xl text-base hover:bg-gray-950 cursor-pointer text-white border border-gray-600 rounded-lg'
								required
								value={cardNumber}
								onChange={handleCardNumberChange}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label className='text-white sm:text-base text-sm'>
								Expiration Date:
							</Label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										className={cn(
											'w-full bg-[#272727] border-none justify-start text-left p-3 text-base',
											!date && 'text-muted-foreground'
										)}
									>
										<CalendarIcon />
										{date ? format(date, 'PPP') : <span>mm-yyyy</span>}
									</Button>
								</PopoverTrigger>
								<PopoverContent
									align='start'
									className='flex w-auto flex-col space-y-2 p-2 bg-[#272727] text-white'
								>
									<div className='rounded-md border'>
										<Calendar
											mode='single'
											selected={date}
											onSelect={setDate}
										/>
									</div>
								</PopoverContent>
							</Popover>
						</div>
					</div>
					<Button
						className='w-full p-6 mt-5 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-xl hover:bg-pink-600'
						onClick={handleContinue}
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

export default PaymentClick
