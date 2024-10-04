import React from 'react'
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';

export default function Navbar() {
  return<>
  <div className="flex items-center justify-between p-3 max-w-6xl mx-auto">


  <Link href={'/'} className="flex gap-1 items-center">
    <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
    <span className='text-xl hidden sm:inline'>Clone</span>
  </Link>

  <div className="flex gap-4">
    <MenuItem title="Home" address="/" Icon={AiFillHome} />
    <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
    
  </div>

  </div>
  </>
}
