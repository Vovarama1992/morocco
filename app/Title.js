import styles from './page.module.scss';
import { useRef } from 'react';

export default function Title({ children, scrollY}) {
const nameRef = useRef(null);
const nameClass = `absolute text-custom-black text-stroke-white mb-0 font-goku font-thin ${
    scrollY < 200 ? 'transition-transform duration-300 transform translate-x-[-5%] translate-y-[-17%]' : ''
  }`;
    return (
        <div className="
        relative
        top-[4%] lg:top-[18%]
        
        pt-[5%]
        h-[780px] lg:h-auto
        left-[19%] lg:left-[35%]
        w-[65%] lg:w-[45%]
        flex flex-col justify-center items-center
        font-semibold
        text-[70px] lg:text-[125px]
        text-white
        border-b-2 border-dotted border-[#090404]
      ">
          <h1 className="relative">
          <div ref={nameRef} className={nameClass}>Osama</div>
         <div class="relative mb-0 
         font-goku font-thin
          text-custom-white">Osama</div>
          </h1>
          <span class="font-goku font-thin 
          mt-[-10px] md:mt-[-40px]">Ushakov</span>
          <div class="mt-7 leading-6 md:leading-7 
          font-medium w-ful md:w-9/10 
          text-center text-sm md:text-base font-raleway">
            <span className={`font-trump-gothic-pro font-bold text-[15px] lg:text-[25px] font-light`}>Full-stack developer and researcher </span>
            from Omsk specialize in both front-end and back-end technologies, bringing creative solutions to complex problems.
          </div>
          <div className="flex justify-center items-center gap-10 w-full font-alegreya h-10 mt-[39px] ">
            <div className="text-white text-[21px]">Om</div>
            <div className="text-white text-[21px]">13°C</div>
            <div className="text-white text-[21px]">5:33PM</div>
           
            
            {children}
          
          </div>
          
        </div>
    )
}