import React from 'react'
import Img1 from "../img/100/1.png"
import Img2 from "../img/100/2.png"
import Img3 from "../img/100/3.png"
import Img4 from "../img/100/4.png"
import { ReactComponent as Arrow } from "../img/100/arrow.svg";

const apartment = () => {
  return (
    <div className='mt-40'>
      <div className="flex justify-center">
      <h1 className='font-bold text-center text-5xl w-2/3'>Более 100 свободных квартир редких форматов</h1>
      </div>
      <div className="flex justify-between bg-white rounded-2xl py-5 pl-[60px] mt-[60px] pr-5">
        <div className="items-center flex">
          <div className="">
            <div className="block-left">
              <h4 className='font-travels font-semibold text-4xl'>Свободная планировка, возможность объединить квартиры до 500 м²</h4>
              <p className='font-helvetica mt-5 w-2/4 text-xl'>Не ограничивайте себя при создании жилого пространства Вашей мечты, воспользуйтесь возможностью увеличения площади до комфортного Вам размера</p>
            </div>
            <img src="" alt="" />
            <div className="mt-20">
              <a className="text-[#0A3CE4] hover:text-[#14308b] font-helvetica font-medium flex gap-3 items-center text-lg" href="">Узнать стоимость <Arrow/></a>
            </div>
          </div>
        </div>
        <img src={Img1} alt="" />
      </div>
      <div className="flex justify-between bg-white rounded-2xl py-5 pl-[60px] mt-[60px] pr-5">
        <div className="items-center flex">
          <div className="">
            <div className="block-left">
              <h4 className='font-travels font-semibold text-4xl'>Настоящий дровяной камин </h4>
              <p className='font-helvetica mt-5 w-2/4 text-xl'>В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года</p>
            </div>
            <img src="" alt="" />
            <div className="mt-20">
              <a className="text-[#0A3CE4] hover:text-[#14308b] font-helvetica font-medium flex gap-3 items-center text-lg" href="">Узнать стоимость <Arrow/></a>
            </div>
          </div>
        </div>
        <img src={Img2} alt="" />
      </div>
      <div className="flex justify-between bg-white rounded-2xl py-5 pl-[60px] mt-[60px] pr-5">
        <div className="items-center flex">
          <div className="">
            <div className="block-left">
              <h4 className='font-travels font-semibold text-4xl'>Настоящий дровяной камин </h4>
              <p className='font-helvetica mt-5 w-2/4 text-xl'>В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года</p>
            </div>
            <img src="" alt="" />
            <div className="mt-20">
              <a className="text-[#0A3CE4] hover:text-[#14308b] font-helvetica font-medium flex gap-3 items-center text-lg" href="">Узнать стоимость <Arrow/></a>
            </div>
          </div>
        </div>
        <img src={Img3} alt="" />
      </div>
      <div className="flex justify-between bg-white rounded-2xl py-5 pl-[60px] mt-[60px] pr-5">
        <div className="items-center flex">
          <div className="">
            <div className="block-left">
              <h4 className='font-travels font-semibold text-4xl'>Настоящий дровяной камин </h4>
              <p className='font-helvetica mt-5 w-2/4 text-xl'>В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года</p>
            </div>
            <img src="" alt="" />
            <div className="mt-20">
              <a className="text-[#0A3CE4] hover:text-[#14308b] font-helvetica font-medium flex gap-3 items-center text-lg" href="">Узнать стоимость <Arrow/></a>
            </div>
          </div>
        </div>
        <img src={Img4} alt="" />
      </div>
    </div>
  )
}

export default apartment