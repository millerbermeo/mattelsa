import React from 'react'
import Navbar from '../components/Navbar'
import Options from '../components/Options'
import Card from '../components/Card';
import MyAccordion from '../components/MyAccordion';
import Footer from '../components/Footer';


function Mujer() {
    return (
        <div className='bg-[#f5f5f5]'>

            <Navbar b="b" top="0" />
            <header className='w-[1340px] grid place-content-center grid-cols-6 m-auto gap-2 pl-[200px] pr-[200px] border-b border-b-gray-300 pb-8'>
                <Options img="11.webp" txt="Basicos" />
                <Options img="22.webp" txt="Graficos" />
                <Options img="33.webp" txt="Denim" />
                <Options img="44.webp" txt="Pants" />
                <Options img="55.webp" txt="Athleisure" />
                <Options img="66.webp" txt="Tejidos" />
            </header>

            <h2 className='text-center font-bold text-[21px] mt-5 text-[#484848] tracking-wide'>Ropa mujer</h2>
            <h3 className='text-center text-sm text-[#7c7a78] tracking-wider'>Outfit onfire para mujer</h3>
            <p className='text-right pr-10 text-[#484848] text-sm'><span className='font-semibold text-[#7c7a78]'>Ordendar por:</span> Relevancia <i class="fa-solid fa-chevron-down"></i></p>
            <div className='flex w-full gap-5 justify-center items-start pt-5'>
                <div className='w-[20%]'>
                <MyAccordion/>
                </div>
                <div className='w-[80%] grid grid-cols-3 gap-2 place-content-center'>
                <Card img="model11.webp" Camisa="Croptop" presio="49.000"/>
                <Card img="model22.webp" Camisa="Croptop " presio="43.000"/>
                <Card img="model33.webp" Camisa="Pantalón" presio="143.000"/>
                <Card img="model44.webp" Camisa="Camisa" presio="29.000"/>
                <Card img="model55.webp" Camisa="Vestido" presio="69.000"/>
                <Card img="model66.webp" Camisa="Chaqueta" presio="179.000"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Mujer
