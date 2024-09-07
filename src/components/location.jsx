import React from 'react'
import {ReactComponent as Map} from '../img/Map.svg'
import {ReactComponent as Panoram} from '../img/panoram.svg'

const location = () => {
  return (
    <div className='mt-40'>
      <div className="flex justify-center">
        <div className="">
          <h5 className='font-travels font-medium text-center uppercase'>Престижное расположение</h5>
          <h1 className='font-travels font-bold text-[56px] text-center'>Один из самых зелёных районов столицы — Раменки</h1>
          <div className="line"></div>
        </div>
      </div>
      <div className="map flex justify-center">
        <Map className='w-full h-full'/>
      </div>
      <div className="mt-5">
        <div className="flex justify-center">
          <p className='text-center w-[620px] text-xl font-helvetica'>ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и природным заказником «Долина реки Сетунь»</p>
        </div>
        <div className="flex justify-center mt-5">
          <a href="#">
            <div className="panoraum border-[#773844]/20 border-[1px] rounded-lg px-5 py-3 inline-flex">
              <Panoram/>
              <span className='text-[#773844] font-semibold font-helvetica ml-2'>Панорама района 360˚</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default location