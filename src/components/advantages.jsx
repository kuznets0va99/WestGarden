import React from 'react'

function advantages({ photo, title, description }) {
  return (
    <div className="relative">
      <img  className="rounded-xl h-[320px]" src={photo} alt={title} />
      <div className="absolute bottom-0 left-0 right-0 p-3 font-travels">
        <h4 className="text-[28px] font-medium text-white text-nowrap flex">
          <span className="px-[10px] py-[6px] bg-black/60 backdrop-blur-[16px] rounded-lg">{title}</span>
        </h4>
        <p className="text-white mt-2 flex font-helvetica text-xl font-light">
          <span className="px-[10px] py-[6px] bg-black/60 backdrop-blur-[16px] rounded-lg">{description}</span>
        </p>
      </div>
    </div>
  );
}
export default advantages