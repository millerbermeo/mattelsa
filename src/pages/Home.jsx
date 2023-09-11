import React from 'react'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import backgroundImage from '../../public/fondo.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

function Home() {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen al contenedor
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    width: '100%',
    height: '100vh', // Establece la altura al 100% del viewport
  };
  return (
    <>
      <Logo />
      <Header />
      <Navbar top="34px" />
      <header style={headerStyle} className='flex items-center justify-center'>
        <div className='flex gap-24 text-3xl font-extrabold text-white mt-28'>
          <Link to="hombre" ><button className='w-[200px] h-[70px] border-[2.5px] hover:border-transparent duration-500 btn1-uno'><span className='btn1-dos tracking-wide'>hombre</span></button>
          </Link>
          <Link to="mujer" >
            <button className='w-[200px] h-[70px] border-[2.5px] hover:border-transparent duration-300 btn2-uno'><span className='btn2-dos tracking-wide'>mujer</span></button>
          </Link>
        </div>
      </header>
      <section className='flex gap-[5px] mt-1 flex-wrap'>
        <div className='w-[446px] overflow-hidden cursor-pointer'><img className='w-[446px] transform hover:scale-110 duration-[350ms]' src="uno.webp" alt="" /></div>
        <div className='w-[446px] overflow-hidden cursor-pointer'><img className='w-[446px] transform hover:scale-110 duration-[350ms]' src="dos.webp" alt="" /></div>
        <div className='w-[446px] overflow-hidden cursor-pointer'><img className='w-[446px] transform hover:scale-110 duration-[350ms]' src="tres.webp" alt="" /></div>
      </section>
      <Footer />
    </>
  )
}

export default Home
