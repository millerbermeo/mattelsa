import React from 'react'
import Navbar from '../components/Navbar'
import Options from '../components/Options'
import Card from '../components/Card';
import MyAccordion from '../components/MyAccordion';
import Footer from '../components/Footer';

function Hombre() {
    return (
        <div className='bg-[#f5f5f5]'>

            <Navbar b="b" top="0" />
            <header className='w-[1340px] m-auto grid place-content-center grid-cols-6 gap-2 pl-[200px] pr-[200px] border-b border-b-gray-300 pb-8'>
                <Options img="1.webp" txt="Oversize" />
                <Options img="2.webp" txt="Graficos" />
                <Options img="3.webp" txt="Basicos" />
                <Options img="4.webp" txt="Denim" />
                <Options img="5.webp" txt="Cargo" />
                <Options img="6.webp" txt="Headwear" />
            </header>

            <h2 className='text-center font-bold text-[21px] mt-5 text-[#484848] tracking-wide'>Ropa para hombre</h2>
            <h3 className='text-center text-sm text-[#7c7a78] tracking-wider'>Ropa de hombre en nuestro sitio web y tiendas del país.</h3>
            <p className='text-right pr-10 text-[#484848] text-sm'><span className='font-semibold text-[#7c7a78]'>Ordendar por:</span> Relevancia <i class="fa-solid fa-chevron-down"></i></p>
            <div className='flex w-full gap-5 justify-center items-start pt-5'>
                <div className='w-[20%] hidden lg:block'>
                <MyAccordion/>
                </div>
                <div className='w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-center'>
                <Card img="model1.webp" Camisa="Camisa" presio="79.000"/>
                <Card img="model2.webp" Camisa="Buzo" presio="55.000"/>
                <Card img="model3.webp" Camisa="Medias" presio="25.000"/>
                <Card img="model4.webp" Camisa="Jeans" presio="129.000"/>
                <Card img="model5.webp" Camisa="Tank" presio="49.000"/>
                <Card img="model6.webp" Camisa="Camisa" presio="55.000"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hombre
