import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function Tienda() {
  return (
    <div className='bg-[#f5f5f5] w-full'>
      <Navbar b="b" top="0" />
      <img src="tienda.png" alt="" className='w-full mt-[60px]' />
      <div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="770"
              height="510"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=pitalito-huila&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="Google Map"
            ></iframe>
            <a href="https://2yu.co">2yu</a>
            <br />
            <style>
              {`.mapouter{position:relative;text-align:right;height:510px;width:770px;}`}
            </style>
            <a href="https://embedgooglemap.2yu.co">html embed google map</a>
            <style>
              {`.gmap_canvas{overflow:hidden;background:none!important;height:510px;width:770px;}`}
            </style>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tienda
