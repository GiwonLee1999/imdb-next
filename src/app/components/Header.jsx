import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
// Header component for the IMDb clone
// This component contains navigation links and the logo
export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-5'>
        <MenuItem title="Home" address="/" Icon={AiFillHome}/>
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>

      <div className='flex items-center gap-4'>
        <DarkModeSwitch />

        <Link href='/' className='flex gap-1 items-center'>
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
      </div>
    
    </div>
  )
}
