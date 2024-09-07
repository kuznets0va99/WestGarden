import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "react-feather";
import { ReactComponent as Waves } from "../img/waves.svg";
import { ReactComponent as Park } from "../img/park.svg";

function HeroSection() {
  const [currentRiverImage, setCurrentRiverImage] = useState(0);
  const [currentParkImage, setCurrentParkImage] = useState(0);
  const imagesRiver = [
    {
      location: require("../img/river line/slide.png"),
      title: "Корпуса кластера River Line на набережной Раменки",
    },
    {
      location: require("../img/river line/slide-1.png"),
      title: "Возле набережной места для прогулок и детские площадки",
    },
    {
      location: require("../img/river line/slide-2.png"),
      title: "Вид на корпуса сверху",
    },
    {
      location: require("../img/river line/slide-3.png"),
      title: "Можно провести вечер сидя на мостике около реки",
    },
    {
      location: require("../img/river line/slide-4.png"),
      title: "Детская площадка",
    },
    {
      location: require("../img/river line/slide-5.png"),
      title: "Река прямо у дома, в любой момент можно прогуляться",
    },
    {
      location: require("../img/river line/slide-6.png"),
      title: "Квартиры с панорамным видом на парк",
    },
  ];
  const imagesPark = [
    {
      location: require("../img/park line/slide.png"),
      title: "Корпуса кластера River Line на набережной Раменки",
    },
    {
      location: require("../img/river line/slide-1.png"),
      title: "Возле набережной места для прогулок и детские площадки",
    },
    {
      location: require("../img/river line/slide-2.png"),
      title: "Вид на корпуса сверху",
    },
  ];

  const handleNextRiver = () => {
    setCurrentRiverImage((prev) => (prev + 1) % imagesRiver.length);
  };
  
  const handlePrevRiver = () => {
    setCurrentRiverImage((prev) => (prev - 1 + imagesRiver.length) % imagesRiver.length);
  };

  const handleNextPark = () => {
    setCurrentParkImage((prev) => (prev + 1) % imagesPark.length);
  };
  
  const handlePrevPark = () => {
    setCurrentParkImage((prev) => (prev - 1 + imagesPark.length) % imagesPark.length);
  };

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className='mt-[164px]'>
      <div className="River-Line bg-[#1F2057] text-white pt-20 pb-20">
        <div>
          <div className="flex justify-between items-center px-12">
            <div>
              <div className="flex gap-3">
                <h1 className="text-5xl font-bold font-travels text-nowrap">River Line</h1>
                <Waves />
              </div>
              <p className="text-lg mt-4">Восемь жилых корпусов по 12-14 этажей <br /> выстроены вдоль реки Раменки.</p>
            </div>
            <a href="#">
              <button className='bg-white text-black py-3 px-6 rounded-2xl font-helvetica font-medium'>
                Посмотреть планировки
              </button>
            </a>
          </div>
          
          <div className="relative mt-16 flex justify-center items-center w-full">
            <button onClick={handlePrevRiver} className="p-1 absolute left-0 z-10 rounded-full shadow bg-black/45 text-white hover:bg-black/80">
              <ChevronLeft size={40} />
            </button>
            
            <div className="flex items-center justify-center w-full overflow-hidden gap-5">
              <motion.img
                key={`left-${currentRiverImage}`}
                src={imagesRiver[(currentRiverImage - 1 + imagesRiver.length) % imagesRiver.length].location}
                className="w-1/4 h-60 object-cover opacity-50 transition-opacity duration-300 brightness-50"
                variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
              />
              
              <div className="relative w-3/5 h-80 ">
                <motion.img
                  key={`center-${currentRiverImage}`}
                  src={imagesRiver[currentRiverImage].location}
                  className="w-full h-full object-cover cursor-pointer" 
                  variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
                />
                
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4"
                  key={`text-${currentRiverImage}`}
                  variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
                >
                  <p className="text-lg text-center font-helvetica font-light">{imagesRiver[currentRiverImage].title}</p>
                </motion.div>
              </div>
              
              <motion.img
                key={`right-${currentRiverImage}`}
                src={imagesRiver[(currentRiverImage + 1) % imagesRiver.length].location}
                className="w-1/4 h-60 object-cover opacity-50 transition-opacity duration-300 brightness-50" 
                variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
              />
            </div>
            <button onClick={handleNextRiver} className="p-1 absolute right-0 z-10 rounded-full shadow bg-black/45 text-white hover:bg-black/80">
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
      <div className="Park-Line bg-[#A0A747] text-white pt-20 pb-20">
        <div className="">
          <div className="flex justify-between items-center px-12">
            <div>
              <div className="flex gap-3">
                <h1 className="text-5xl font-bold font-travels">Park Line</h1>
                <Park />
              </div>
              <p className="text-lg mt-4">Семь 14-этажных жилых корпусов,<br/>расположенных вдоль Матвеевского леса</p>
            </div>
            <a href="#">
              <button className='bg-white text-black py-3 px-6 rounded-2xl font-helvetica font-medium'>
                Посмотреть планировки
              </button>
            </a>
          </div>
          
          <div className="relative mt-16 flex justify-center items-center w-full">
            <button onClick={handlePrevPark} className="p-1 absolute left-0 z-10 rounded-full shadow bg-black/45 text-white hover:bg-black/80">
              <ChevronLeft size={40} />
            </button>
            
            <div className="flex items-center justify-center w-full overflow-hidden gap-5">
              <motion.img
                key={`left-${currentParkImage}`}
                src={imagesPark[(currentParkImage - 1 + imagesPark.length) % imagesPark.length].location}
                className="w-1/5 h-60 object-cover opacity-50 transition-opacity duration-300 brightness-50"
                variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
              />
              
              <div className="relative w-3/5 h-80 ">
                <motion.img
                  key={`center-${currentParkImage}`}
                  src={imagesPark[currentParkImage].location}
                  className="w-full h-full object-cover cursor-pointer" 
                  variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
                />
                
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4"
                  key={`text-${currentParkImage}`}
                  variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
                >
                  <p className="text-lg text-center font-helvetica font-light">{imagesPark[currentParkImage].title}</p>
                </motion.div>
              </div>
              
              <motion.img
                key={`right-${currentParkImage}`}
                src={imagesPark[(currentParkImage + 1) % imagesPark.length].location}
                className="w-1/5 h-60 object-cover opacity-50 transition-opacity duration-300 brightness-50" 
                variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5 }}
              />
            </div>
            <button onClick={handleNextPark} className="p-1 absolute right-0 z-10 rounded-full shadow bg-black/45 text-white hover:bg-black/80">
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HeroSection;