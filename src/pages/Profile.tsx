import { FaArrowLeftLong } from 'react-icons/fa6'
import '../index.css'
import { Link } from 'react-router-dom'
import { MdSupportAgent } from 'react-icons/md'
import { FaChevronRight } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const Profile = () => {
	const [activeTab, setActiveTab] = useState('tab1')

	const handleActiveTab = (tab: string) => {
		// e.preventDefault()
		setActiveTab(tab)
	}

	return (
		<div className='w-full bg-[#272727] text-white min-h-screen sm:px-10 px-3'>
			<div className='flex items-center justify-between  py-5'>
				<Link to={'/'} className='cursor-pointer'>
					<span className='text-white sm:text-2xl text-base'>
						<FaArrowLeftLong />
					</span>
				</Link>
				<h1 className='sm:text-2xl text-xl'>Profile</h1>
				<span className='w-8'></span>
			</div>
			<div className='w-full  flex items-center justify-center flex-col my-5'>
				<img
					src='/images/user.png'
					alt='Profile'
					className='w-32 h-32 rounded-full object-cover mb-3'
				/>
				<h3>Sardor Jumanazarov</h3>
				<span>+998 90 999 99 00</span>
			</div>
			<div className='w-full mt-5'>
				<Link to={'/support'} className='w-full'>
					<button className='w-full p-4 rounded-xl flex items-center justify-between bg-[#272727] border border-gray-400'>
						<div className='flex items-center gap-4'>
							<span className='w-12 h-12 bg-[#fecc00] rounded-2xl flex items-center justify-center shadow-[0px_4px_10px_2px_rgba(254,204,0,0.5)]'>
								<MdSupportAgent size={42} />
							</span>
							<span className='sm:text-xl text-base'>Support</span>
						</div>
						<span className='sm:text-2xl text-base'>
							<FaChevronRight />
						</span>
					</button>
				</Link>
			</div>
			<h1 className='text-xl mt-5 mb-3'>Language</h1>
			<div className='w-full flex items-center justify-center gap-4 p-2 bg-gray-700 rounded-xl'>
				<div className='w-full flex flex-row sm:flex-row gap-4'>
					<Button
						className={cn(
							'flex items-center justify-center w-full h-12 px-4 py-2  from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all',
							activeTab === 'tab1' ? 'hover:bg-gradient-to-r' : ''
						)}
						onClick={() => handleActiveTab('tab1')}
					>
						EN
					</Button>
					<Button
						className={cn(
							'flex items-center justify-center w-full h-12 px-4 py-2  from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all',
							activeTab === 'tab2' ? 'hover:bg-gradient-to-r' : ''
						)}
						onClick={() => handleActiveTab('tab2')}
					>
						UZ
					</Button>
					<Button
						className={cn(
							'flex items-center justify-center w-full h-12 px-4 py-2  from-yellow-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all',
							activeTab === 'tab3' ? 'hover:bg-gradient-to-r' : ''
						)}
						onClick={() => handleActiveTab('tab3')}
					>
						RU
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Profile
