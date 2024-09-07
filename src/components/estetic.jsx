import React from 'react'
import { ReactComponent as Door } from "../img/door.svg";
import { ReactComponent as Lift } from "../img/lift.svg";
import { ReactComponent as Star } from "../img/Star.svg";
import Enter1 from "../img/enter/image 153.png"
import Enter2 from "../img/enter/image 154.png"
import Hall1 from "../img/lift/image 153.png"
import Hall2 from "../img/lift/image 154.png"

const estetic = () => {
  return (
    <div>
      <h1 className='font-travels font-bold text-[64px] text-center mt-40'>Современная эстетика лобби</h1>
      <div className="mt-12 bg-white px-5 py-10 pb-5 rounded-2xl">
        <div className="">
          <div className="flex gap-2 items-center">
            <Door className='size-8'/>
            <h4 className='font-travels text-3xl font-bold'>Центральные входные группы</h4>
          </div>
          <div className="stars flex gap-2 mt-5 font-helvetica text-xl">
            <div className="star flex gap-[6px] px-4 py-2 bg-[#F7F1E9]">
              <Star/>
              <span>Зоны ожидания и встреч</span>
            </div>
            <div className="star flex gap-[6px] px-4 py-2 bg-[#F7F1E9]">
              <Star/>
              <span>Пост охраны</span>
            </div>
            <div className="star flex gap-[6px] px-4 py-2 bg-[#F7F1E9]">
              <Star/>
              <span>Переговорная комната</span>
            </div>
            <div className="star flex gap-[6px] px-4 py-2 bg-[#F7F1E9]">
              <Star/>
              <span>Колясочная</span>
            </div>
          </div>
        </div>
        <div className="bg-white container flex mt-10">
          <div className="photo flex w-full justify-between gap-4">
            <img src={Enter1} className="w-3/5" alt="" />
            <img src={Enter2} className="w-2/5" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white px-5 py-10 pb-5 mt-3 rounded-2xl">
        <div className="">
          <div className="flex gap-2 items-center">
            <Door className='size-8'/>
            <h4 className='font-travels text-3xl font-bold'>Лифтовый холл</h4>
          </div>
          <div className="stars flex gap-2 mt-5 font-helvetica text-xl">
            <div className="star flex gap-[6px] px-4 py-2 bg-[#F7F1E9]">
              <Star/>
              <span>2-4 лифта</span>
            </div>
            <div className="star flex gap-[6px] px-4 py-2 bg-[#F7F1E9]">
              <Star/>
              <span>Грузовые и пассажирские</span>
            </div>
            <div className="star flex gap-[6px] px-4 py-2 bg-[#F7F1E9]">
              <Star/>
              <span>Ведущие производители</span>
            </div>
          </div>
        </div>
        <div className="bg-white container flex mt-10">
          <div className="photo flex w-full justify-between gap-4">
            <img src={Hall1} className="w-3/5" alt="" />
            <img src={Hall2} className="w-2/5" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default estetic