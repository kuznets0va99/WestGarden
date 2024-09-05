import React from 'react'
import {ReactComponent as Logo} from "../img/Лого 1.svg"
import {ReactComponent as West} from "../img/logo.svg"

const header = () => {
  return (
    <header className='w-full mt-5'>
      <div className="nav flex justify-between items-center">
        <div className="block-left flex items-center gap-5">
          <Logo/>
          <p className='text-[#646562] font-helvetica text-sm'>Официальный партнер <br/>АО «ИНТЕКО»</p>
        </div>
        <div className="block-right">
          <a href="tel:+74958451934" className='font-travels font-medium'>+7 495 845 19 34</a>
          <hr />
          <div className="status text-[#A0A747] font-inter font-medium">
            <span className="">•</span>
            <span className="ml-1">работаем</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header