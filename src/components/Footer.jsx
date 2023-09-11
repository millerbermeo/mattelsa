import React from 'react'

function Footer() {
  return (
    <>
       <div className='flex w-full justify-center items-center flex-col tracking-wide'>
        <div className='flex w-full h-72 items-start pt-24 justify-center gap-52 text-sm text-[#787878]'>
        <div className='flex gap-3 flex-col'>
            <h3 className='font-bold text-[#474735]'>CONTACTO</h3>
            <span className='flex gap-2'><img src="whatsapp.svg" alt="" />300 507 10 00</span>
            <p><strong>PBX:</strong> 01 8000 41 37 57</p>
            <p>Escríbenos</p>
        </div>
        <div className='flex gap-3 flex-col'>
            <h3 className='font-bold text-[#474735]'>QUIÉNES SOMOS</h3>
            <p>Cultura</p>
            <p>Trabaja aquí</p>
            <p>La vida en Mattelsa</p>
        </div>
        <div className='flex gap-3 flex-col'>
            <h3 className='font-bold text-[#474735]'>AYUDA</h3>
            <p>Envíos</p>
            <p>Cambios y garantías</p>
            <p>Preguntas frecuentes</p>
        </div>
        <div className='flex gap-3 flex-col'>
            <h3 className='font-bold text-[#474735]'>SÍGUENOS</h3>
            <div className='flex gap-3 text-2xl'>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-spotify"></i>
            <i class="fa-brands fa-tiktok"></i>
            </div>
        </div>
        </div>
        <div className='flex border border-b-1 w-full justify-between pl-10 pr-10 h-20 text-[13px] items-center font-medium text-[#787878]'>
            <img src="footerlogo.svg" alt="" />
            <div className='flex gap-5 justify-between items-center'><p>Términos y condiciones</p>| <p>  Política de Privacidad </p>| <p>Superintendencia</p></div>
            <span className='font-bold'>© 2023 Mattelsa S.A.S.</span>
        </div>
        </div> 
    </>
  )
}

export default Footer
