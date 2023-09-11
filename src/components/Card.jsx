import React from 'react'

function Card({img, Camisa, presio}) {
  return (
    <>
        <div className='w-[335px] h-[550px] mb-5'>
            <img src={img} alt="" className='w-[335px] h-[500px]' />
            <h2 className='pt-2 font-medium text-[#484848]'>{Camisa}</h2>
            <p className='text-sm text-[#7c7a78]'>${presio}</p>
        </div>
    </>
  )
}

export default Card
