import React from 'react'
import { Link } from "react-router-dom"

function Navbar({bg, top, b}) {
    return (
        <nav className={`w-full h-[62px] transform bg-[${bg}] hover:bg-[#f5f5f5] duration-300 flex justify-between items-center absolute top-${top} border-${b} border-b-gray-300`}>
            <ul className='pl-16'>
                <Link to="/">
                <img src="logomattelsa.svg" alt="logo" />
                </Link>
            </ul>
            <ul className='flex h-[60px] gap-8 justify-center items-center font-semibold text-[#484848] pl-36'>
                <Link to="/hombre">
                <li className='h-[60px] flex items-center border-b-[3px] border-transparent hover:border-[#484848] duration-300'><a href="">hombre</a></li>
                </Link>
                <Link to="/mujer">
                <li className='h-[60px] flex items-center border-b-[3px] border-transparent hover:border-[#484848] duration-300'><a href="">mujer</a></li>
                </Link>
                <Link to="/cosas">
                <li className='h-[60px] flex items-center border-b-[3px] border-transparent hover:border-[#484848] duration-300'><a href="">cosas</a></li>

                </Link>
                <Link to="/tienda">
                <li className='h-[60px] flex items-center border-b-[3px] border-transparent hover:border-[#484848] duration-300'><a href="">tienda</a></li>

                </Link>
                <li className='h-[60px] flex items-center border-b-[3px] border-transparent hover:border-[#484848] duration-300'><a href="">activismo</a></li>
                <li className='h-[60px] flex items-center border-b-[3px] border-transparent hover:border-[#484848] duration-300 text-green-400 font-bold sale relative'>
                    <a href="#">sale</a>
                    <div className='flex gap-2 justify-center items-center text-xs opacity-0 sale2 absolute left-10'>
                        <div className='w-[1px] h-4 bg-black'></div>
                        <ul className='flex gap-5 text-[#484848]'>
                            <li className='flex items-center h-[60px]'><a href="#">hombre</a></li>
                            <li className='flex items-center h-[60px]'><a href="#">mujer</a></li>
                        </ul>
                    </div>
                </li>

            </ul>

            <ul className='flex gap-8 justify-center items-center pr-14 text-gray-800'>
                <i class="text-xl fa-solid fa-circle-user"></i>
                <i class="text-xl fa-solid fa-magnifying-glass"></i>
                <i class="text-xl fa-solid fa-igloo"></i>
            </ul>
        </nav>
    )
}

export default Navbar
