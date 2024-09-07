import React from 'react'
import {ReactComponent as Arrow} from '../img/arrowgrey.svg'
import human from "../img/personal.png"

const special = () => {
  return (
    <div className="flex w-full justify-between items-center mt-24 bg-white">
      <div className="pt-12 ml-[60px] pb-9">
        <h4 className='text-[#773844] font-travels font-semibold'>СПЕЦИАЛЬНО ДЛЯ ВАС</h4>
        <h3 className='font-travels font-bold text-5xl mt-4'>Персональная презентация <br/> West Garden</h3>
        <div className="font-helvetica text-xl font-light mt-6">
        <div className="flex items-center"><Arrow/><span className='ml-3'>Подробно расскажем про жилой комплекс</span></div>
        <div className="flex items-center"><Arrow/><span className='ml-3'>Ознакомитесь со всеми планировками и ценами</span></div>
        <div className="flex items-center"><Arrow/><span className='ml-3'>Прогуляетесь по благоустроенной набережной</span></div>
      </div>
      <div className="number font-helvetica mt-14">
        <h5 className='font-medium'>Закрепить за номером</h5>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 bg-[#F5F3F0] px-4 py-2 rounded-l-md text-black rounded-md">
            <span className="">+7</span>
            <input type="tel" className="ml-2 focus:outline-none bg-[#F5F3F0]" placeholder="Введите номер телефона" />
          </div>
          <button className="bg-[#773844] hover:bg-[#56212B] text-white font-light py-2 px-4 rounded-xl text-sm">Записаться на презентацию</button>
        </div>
        <div className="mt-4 text-[#646562] font-helvetica text-xs">
          <p>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c <a href="#">политикой конфиденциальности</a></p>
        </div>
      </div>
      </div>
      <div className="right-block relative">
        <img className="w-[362px]" src={human} alt="" />
        <div className="absolute bottom-6 left-8 text-white font-helvetica">
          <h4 className='font-travels font-medium'>Алёна<br/>Кирющенко</h4>
          <span className='font-light'>ведущий эксперт<br/>по недвижимости<br/>в ESTES</span>
        </div>
      </div>
    </div>
  )
}

export default special