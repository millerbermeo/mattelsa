import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card';
import MyAccordion from '../components/MyAccordion';
import Footer from '../components/Footer';

function Cosas() {
    return (
        <div className='bg-[#f5f5f5]'>

            <Navbar b="b" top="0"/>

            <p className='text-right pr-10 mt-[62px] text-[#484848] text-sm pt-3'><span className='font-semibold text-[#7c7a78]'>Ordendar por:</span> Relevancia <i class="fa-solid fa-chevron-down"></i></p>
            <div className='flex w-full gap-5 justify-center items-start pt-5'>
                <div className='w-[20%]'>
                <MyAccordion/>
                </div>
                <div className='w-[80%] grid grid-cols-3 gap-2 place-content-center'>
                <Card img="cosa1.webp" Camisa="Medias" presio="29.000"/>
                <Card img="cosa2.webp" Camisa="Gorra " presio="53.000"/>
                <Card img="cosa3.webp" Camisa="Gorra" presio="53.000"/>
                <Card img="cosa4.webp" Camisa="Bolsa" presio="6.000"/>
                <Card img="cosa5.webp" Camisa="Pin" presio="15.000"/>
                <Card img="cosa6.webp" Camisa="Medias" presio="25.000"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cosas
