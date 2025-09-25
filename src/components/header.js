import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'


function Header() {
  const[ToggleMenu,setToggleMenu] = useState(false)

  return (
    <header className="   flex justify-between px-5 py-2.5    font-bold text-1xl      bg-gradient-to-r from-red-700 via-purple-700 to-violet-700 ">
      <a href='' className='text-white'></a>
      <nav className='hidden md:block'>
        <ul className='flex text-white py-2  text-center text-base '> 
          <li><a href='/' className='hover:text-black border-2 justify-center text-center p-1.5 px-8 font-bold  rounded-xl bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Home</a></li>
          <li><a href='#about' className='hover:text-black border-2 justify-center text-center p-1.5 px-8 font-bold  rounded-xl bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Skills</a></li>
          <li><a href='#projects' className='hover:text-black border-2 justify-center text-center p-1.5 px-8 font-bold  rounded-xl bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Projects</a></li>
          <li><a href='#resume' className='hover:text-black border-2 justify-center text-center p-1.5 px-8 font-bold  rounded-xl bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Resume</a></li>
          <li><a href='#contect' className='hover:text-black border-2 justify-center text-center p-1.5 px-8 font-bold  rounded-xl bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Contect</a></li>
        </ul>
      </nav >
      {ToggleMenu && <nav className=" block md:hidden   ">
        <ul onClick={()=>setToggleMenu(!ToggleMenu)} className=' flex flex-col text-white mobile-nav     '> 
          <li><a href='/' className='px-5 hover:text-black    font-bold  rounded-md bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Home</a></li>
          <li><a href='#about' className='px-5 hover:text-black border-2   font-bold  rounded-md bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>About</a></li>
          <li><a href='#projects' className=' px-3.5 hover:text-black border-2   font-bold  rounded-md bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Projects</a></li>
          <li><a href='#resume' className='px-3.5 hover:text-black border-2   font-bold  rounded-md bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Resume</a></li>
          <li><a href='#contect' className='px-3.5 hover:text-black border-2     font-bold  rounded-md bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Contect</a></li>
        </ul>

      </nav>} 
      <button onClick={()=>setToggleMenu(!ToggleMenu)} className="block md:hidden"><Bars3Icon className="text-white h-5"/></button>
    </header>
  )
}

export default Header  