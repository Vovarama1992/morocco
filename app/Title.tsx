
import {useState} from 'react';
import styles from './page.module.scss';
import {useRouter} from 'next/navigation';




 export default function Tittle({ children, scrollY, mobile, colr}) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  


  function reload() {
    const nextcount = count + 1;
    setCount(nextcount);
    router.push(`/?reload=${nextcount}`);
  }


  const cloudWrapper = {
    width: mobile ? '68px' : '50px',
    marginLeft: '-10px',
    marginTop: '-2px',
    borderRadius: '50%',
    border: '4px solid rgba(0, 0, 0, 0.5)',
    background: `${colr}`,
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  
  
  }

const nameClass = `absolute text-custom-black ml-[63px] mt-[40px] text-stroke-white mb-0 font-goku font-thin ${
    scrollY < 200 ? 'transition-transform duration-300 transform translate-x-[-25%] lg:translate-x-[-13%] translate-y-[-46%] lg:translate-y-[-27%]' : ''
  }`;
    return (
        <div className="
        relative
        top-[12%] lg:top-[18%]
        
        pt-[5%]
        h-[810px] lg:h-auto
        left-[19%] lg:left-[35%]
        w-[65%] lg:w-[45%]
        flex flex-col justify-center items-center
        font-semibold
        text-[70px] lg:text-[125px]
        text-white
        border-b-2 border-dotted border-[#090404]
      ">
          <h1 className="relative text-[82px] lg:text-[125px]">
          <span className={nameClass}>Osama</span>
         <span className="relative mb-0 ml-[30px]
         font-goku font-thin
          text-custom-white">Osama</span>
          
          
          <span className="block font-goku  font-thin 
          mt-[-10px] md:mt-[-40px]">Ushakov</span>
    </h1>
    
          <div className="mt-[7px] leading-6 md:leading-7 
          font-medium w-ful md:w-9/10 
          text-center text-[14px] lg:text-[18px] font-raleway">
            <span className={`font-trump-gothic-pro font-bold text-[19px] lg:text-[26px] font-light`}>Full-stack developer and researcher </span>
            from Omsk specialize in both front-end and back-end technologies, bringing creative solutions to complex problems.
          </div>
          <div className="flex justify-center items-center gap-10 w-full font-alegreya h-10 mt-[39px] ">
            {children}
           
            <button onClick={reload} className="pointer-events-auto" style={cloudWrapper}>
              <div  style={{display: 'none'}} className="bg-red duration-300 ease-linear transform  w-[30px] h-[30px] rounded-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolr" className="bi bi-clouds-fill" viewBox="0 0 16 16"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"></path><path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path></svg></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-clouds-fill" viewBox="0 0 16 16"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"></path><path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path></svg>
            
            
              </button>
            
          
          </div>
          
        </div>
    )
}

