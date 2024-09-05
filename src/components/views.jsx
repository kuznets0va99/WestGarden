import React from 'react'
import Carousel from './carousel'
import Img1 from "../img/img1.png"
import Img2 from "../img/img2.png"
import Img3 from "../img/img3.png"

const slides =[
  Img1,
  Img2,
  Img3,
]
const labels = [
  "Поклонная гора",
  "Москва Сити",
  "Матвеевский лес"
];

const views = () => {
  return (
    <div>
      <h1 className='font-travels font-bold text-[56px] text-center mt-40'>Наслаждайтесь видами из окон своей квартиры</h1>
      <div className="slider">
        <Carousel labels={labels}>
          {
            slides.map((image, index) => (
              <img className="w-full" src={image} key={index} />
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default views