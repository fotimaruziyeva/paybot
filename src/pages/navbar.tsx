import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { MdSupportAgent } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface IProps {
	langs: boolean,
	type: string
}

const Navbar = ({ langs, type }: IProps) => {
	return (
		<div className='flex items-center justify-between py-6'>
			{
				type === 'back' && (
					<Link to={'/'} className='cursor-pointer'>
				<span className='text-white sm:text-2xl text-base'>
					<FaArrowLeftLong />
				</span>
			</Link>
				)
			}
			{
				type === 'support' && (
					<Link to={'/'} className='cursor-pointer'>
				<span className='text-white sm:text-2xl text-base'>
					<MdSupportAgent />
				</span>
			</Link>
				)
			}
			<img src='/images/logo2.png' alt='Logo' className='h-10' />
			<span className={cn(langs ? 'hidden' : 'flex')}></span>
			<span className={cn(' items-center', langs ? 'flex' : 'hidden')}>
				<Select>
					<SelectTrigger className='w-[80px]'>
						<SelectValue placeholder='En' />
					</SelectTrigger>
					<SelectContent className='bg-[#272727]'>
						<SelectGroup className='text-white'>
							<SelectItem value='ru'>RU</SelectItem>
							<SelectItem value='en'>EN</SelectItem>
							<SelectItem value='uz'>UZ</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</span>
		</div>
	)
}

export default Navbar
