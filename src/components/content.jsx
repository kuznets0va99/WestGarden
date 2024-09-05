import React from 'react'
import {ReactComponent as West} from '../img/logo.svg'
import {ReactComponent as Reward} from '../img/award.svg'
import Baner from "../img/baner.png"
import Advantages from './advantages'

import ga from "../img/20gr.png"
import corps from "../img/15corps.png"
import gr from "../img/7gr.png"

const content = () => {
  return (
    <div className="">
      <div className="first-screen">
        <div className="title">
          <div className="logo mt-[60px] flex justify-center">
            <West/>
          </div>
          <h1 className='font-travels font-bold text-[64px] text-center'>Жизнь в зеленом оазисе в статусном районе Москвы</h1>
          <div className="">
            <h5 className='font-helvetica font-normal text-[24px] text-center'>Жилой комплекс бизнес-класса в 20 минутах от Кремля</h5>
            <hr className='border-[#A0A747] border-2 rounded-full'/>
          </div>
        </div>
        <div className="baner mt-12">
            <div className="relative">
              <div className="absolute top-0 right-0 bg-white">
                <div className="font-travels font-medium w-[193px] py-4 px-3 text-center">
                  <div className="reward w-full flex justify-center">
                    <Reward/>
                  </div>
                  <span>Победитель федеральной премии Urban Awards 2019</span>
                </div>
              </div>
              <img src={Baner} alt="Жилой комплекс" className="w-full" />
              <div className="absolute flex bottom-0 left-0 mb-5 gap-5 w-full justify-center">
                <div className="flex gap-[10px] px-3 py-1 bg-black/60 backdrop-blur-sm font-travels font-medium rounded-md">
                  <p className="text-sm text-white">1 очередь</p>
                  <p className='text-[#A0A747]'>2022</p>
                </div>
                <div className="flex gap-[10px] px-3 py-1 bg-black/60 backdrop-blur-sm font-travels font-medium rounded-md">
                  <p className="text-sm text-white">2 очередь</p>
                  <p className='text-[#A0A747]'>2023</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="secound-screen flex justify-center mt-[80px]">
        <div className="advantages grid grid-cols-2 gap-5">
          <Advantages photo={ga} title="20 гектаров" description="территории ЖК — это как полтора Зарядья"/>
          <Advantages photo={corps} title="15 корпусов" description="по 12-14 этажей, просторная застройка"/>
          <Advantages photo={gr} title="7 гектаров" description="приватного парка для жителей ЖК"/>
          <Advantages photo={corps} title="15 корпусов" description="по 12-14 этажей, просторная застройка"/>
        </div>
      </div>
    </div>
  )
}

export default content