import React from "react";
import cursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-900 via-[#120428] to-black opacity-90"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-10 sm:pt-28 sm:pb-16 text-center">

        <div className="flex justify-center mb-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <span className="bg-linear-to-r from-red-400 to-blue-400 text-transparent bg-clip-text font-semibold text-sm sm:text-base">
              Version 2.0 is Free
            </span>
            <span className="flex items-center gap-1 text-white/70 text-sm sm:text-base">
              Read More <span aria-hidden="true">&rarr;</span>
            </span>
          </a>
        </div>

        <div className="relative flex justify-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg relative inline-block">
            One Task at a Time
          </h1>

          <Image
            src={messageImage}
            alt=""
            width={180}
            height={180}
            className="hidden lg:block absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-36 pointer-events-none"
          />

          <Image
            src={cursorImage}
            alt=""
            width={180}
            height={180}
            className="hidden lg:block absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-36 pointer-events-none"
          />
        </div>

        <div className="flex justify-center">
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Celebrate the joy of accomplishments with an app designed to track
            progress, motivate your efforts and celebrate success.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-white text-black py-3 px-8 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-transform active:scale-95 shadow-lg hover:cursor-pointer">
            Get for Free
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px] sm:h-20 md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-black"
          ></path>
        </svg>
      </div>

      <div className="bg-black h-12 w-full"></div>
    </div>
  );
};
