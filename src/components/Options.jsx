import React from 'react'

function Options({ img, txt }) {
    return (
        <>
            <div className="relative group mt-[80px] w-[150px] h-[130px] overflow-hidden">
                <img src={img} alt="Imagen" className="w-[150px] transform hover:scale-110 duration-[350ms]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition-opacity z-10">
                    <p className="text-white text-lg font-bold text-center">{txt}</p>
                </div>

            </div>

        </>
    )
}

export default Options
