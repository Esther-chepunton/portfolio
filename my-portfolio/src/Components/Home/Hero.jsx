import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex bg-stone-500 pt-14">
        <div className="w-[50%]">
          <div className="mt-20 ml-20 text-5xl font-bold">
            <h1 className="text-5xl">Esther Chepunton Lipale</h1>
            <div className="flex py-4">
              <h1 className="leading-normal font-extrabold tracking-tight text-white">
                Software Developer
              </h1>
            </div>
          </div>
        </div>
        <div>
          <img src="images\me.jpeg" alt="hero" className="w-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
