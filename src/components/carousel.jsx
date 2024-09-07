import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides, labels,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const goToSlide = (index) => {
    setCurr(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex justify-center flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-black/45 text-white hover:bg-black/80">
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-black/45 text-white hover:bg-black/80"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-black/50 flex px-3 py-3 gap-4 rounded-lg">
            {labels.map((label, i) => (
              <div key={i} onClick={() => goToSlide(i)} className={`transition-all cursor-pointer text-white font-helvetica font-normal ${curr === i ? "font-bold" : "opacity-50"}`}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}