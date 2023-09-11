'use client';

import { Accordion } from 'flowbite-react';

export default function MyAccordion() {
  return (
    <Accordion>
      <Accordion.Panel className=''>
        <Accordion.Title className='font-bold'>
          Categoria
        </Accordion.Title>
        <Accordion.Content className='text-[#7c7a78]'>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Camisetas</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Shorts</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Pantalones</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Camisas</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Buzos</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Gorras</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Polos</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Medias</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Jeans</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Chaquetas</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Pines</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>Joggers</p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='font-bold'>
          Color
        </Accordion.Title>
        <Accordion.Content >
         <div className='grid gap-2 grid-cols-4 w-[130px]'>
          <div className='w-6 h-6 bg-[#33b5ff]'></div>
          <div className='w-6 h-6 bg-[#adadad]'></div>
          <div className='w-6 h-6 bg-[#f2f1d1]'></div>
          <div className='w-6 h-6 bg-[#000000]'></div>

          <div className='w-6 h-6 bg-[#224f17]'></div>
          <div className='w-6 h-6 bg-[#eaa2a2]'></div>
          <div className='w-6 h-6 bg-[#af9464]'></div>
          <div className='w-6 h-6 bg-[#ffffff]'></div>

          <div className='w-6 h-6 bg-[#115aa3]'></div>
          <div className='w-6 h-6 bg-[#593f2e]'></div>
          <div className='w-6 h-6 bg-[#082f4f]'></div>
          <div className='w-6 h-6 bg-[#b0ebff]'></div>

          <div className='w-6 h-6 bg-[#3380ff]'></div>
          <div className='w-6 h-6 bg-[#c8977b]'></div>
          <div className='w-6 h-6 bg-[#842a0f]'></div>
          <div className='w-6 h-6 bg-[#c8a2c8]'></div>
          <div className='w-6 h-6 bg-[#c8a2c8]'></div>
          <div className='w-6 h-6 bg-[#5b215a]'></div>
         </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='font-bold'>
          Talla
                </Accordion.Title>
        <Accordion.Content>
        <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>S</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>M</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>L</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <input type="checkbox" />
            <p>XL</p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}


