
import { Select, SelectContent, SelectGroup, SelectItem,  SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-6">
    <Link to={"/"} className="cursor-pointer">
      <span className="text-white text-3xl">
        <FaArrowLeftLong />
      </span>
    </Link>
    <img src="/images/logo.png" alt="Logo" className="h-12" />
    <span className="flex items-center">
    <Select>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="En" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="ru">RU</SelectItem>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="uz">UZ</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </span>
  </div>
  )
}

export default Navbar
