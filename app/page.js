'use client';
import { useState, useEffect, useRef } from 'react';
import Title from './Title';
import styles from "./page.module.scss";
import Works from './Works';
import './globals.css';


const colours = ['red', 'blueviolet', 'lightblue', 'yellow', 'green'];



export default function Home() {
  const [colr, setcolr] = useState('blueviolet');
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const scrollHeight = Math.min(scroll * 0.05, 100);
  useEffect(() => {
    
  
    const cursor = cursorRef.current;
    cursor.style.display = 'block';
    
  
    const mouseMove = function (e) { 
   let x = e.clientX;
   let y = e.clientY;
   cursor.style.left = x + "px";
   cursor.style.top = y + "px";
  };
  
   document.addEventListener("mousemove", mouseMove);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  

  function generateGradient(colr, toBlack) {
    if (isMobile) {
      toBlack = 15;
    } 
    else toBlack = 22;
  

    let gradient;
    switch(colr) {
      case 'red':
        gradient = `radial-gradient(circle  at 50% -2%, #FF4D6D,  #1A0A0F ${toBlack}%), black 60%`;
        break;
      case 'green':
        gradient = `radial-gradient(circle at top center, lime 0%, #00FF00 2%, #008000 5%, black ${toBlack}%)`;
        break;
      case 'blueviolet':
        gradient = `radial-gradient(circle  at 50% -1%, #6947EF, black ${toBlack}%, black 60%)`;
        break;
        case 'lightblue':
        gradient = `radial-gradient(circle at top center, #ADD8E6 0%, #87CEEB 2%, #00BFFF 5%, black ${toBlack}%)`;
        break;
      case 'yellow':
        gradient = `radial-gradient(circle at top center, yellow 0%, #FFFF00 2%, #FFD700 5%, black ${toBlack}%)`;
        break;
      default:
        gradient = 'radial-gradient(circle at top center, white 0%, black 100%)';
    }
    return gradient;
  }

  const gradient = generateGradient(colr);
  const mirrorLetter = `fixed transition-[left_0.3s_ease,top_0.3s_ease] text-white font-light font-goku text-[85px] lg:text-[145px] pointer-events-none`;
  const mirrorLetterStyle = {
    textShadow: `-8px 13px ${colr}`,
  };

const cloudWrapper = {
  width: isMobile ? '68px' : '50px',
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
  
 
function oncolr(newcolr) {
  setcolr(newcolr);
}
  const mirrorA = {
    position: 'fixed',
    left: isMobile ? '8%' : `15%`,
  top: isMobile ? `calc(67% - ${scroll}px)` : `calc(64% - ${scroll}px)`,
  }
  const mirrorB = {
    position: 'fixed',
    left: isMobile ? '55%' : '70%',
    top: `calc(6% - ${scroll * 0.2}px)`,
}
const mirrorC = {
  position: 'fixed',
  left: isMobile ? '59%' : '75%',
  top: `calc(76% - ${scroll * 0.8}px)`,
}





const scrollLineStyles = {
  background: colr,
  height: `${scrollHeight}%`,
};

const scrollLineClasses = `absolute opacity-100 left-0 top-0 w-[200%]`;







const border = {
  border: '2px solid white',
}

  return (
    <main
      className="
        relative
        top-[-20px] left-[-20px]
        h-[3300px]
        w-[100vw]
        box-border
        cursor-none
      " style={{ background: gradient }}>
      <div className="relative left-10 w-[80%] h-[20%]">
        <div className="absolute text-5xl font-goku 
        w-80 h-80 text-white 
        left-[9%] top-[56px]">
          OU
          <span className="text-40" style={{ color: colr }}>.</span>
        <div className="fixed w-[70px] h-[500px] text-white top-[16px] left-[70%] lg:left-[96%]">
        
          <div className="absolute top-[4%] left-[5%] w-[90%] h-[1px] bg-white"></div>
          
          <div className="absolute left-[5%] top-[6%] w-[90%] h-[2px] bg-white"></div>
          <div className="absolute left-[49%] top-[9%] opacity-60 w-[2%] h-[300px] lg:h-[460px] bg-white">
          <div className={scrollLineClasses} style={scrollLineStyles}></div>
          </div>
        
          </div>
                              
        </div>
        <div className="fixed top-[3%] lg:top-[30%] left-[26%] lg:left-[3%] w-[270px] lg:w-[0.1px] h:[0.1px] lg:h-[270px] bg-transparent">
  {colours.map((colour, index) => {
    const colrClass = 'ball' + colour;
    const vektor = isMobile ? 'left' : 'top';
    return (
      <div key={index} className="absolute flex items-center justify-center left-[-16px] w-[42px] h-[42px] rounded-full border-none bg-transparent" style={{ [vektor]: `${index * 25}%`, ...(colr === colour && border) }}>
        <div className={`${styles.ball} ${styles[colrClass]} ${colr === colour ? styles.checkedBall : ''}`}  onClick={() => oncolr(colour)} data-color={colour}></div>
      </div>
    );
  })}
</div>
       
        
        <div className={mirrorLetter} style={{...mirrorLetterStyle, ...mirrorA}}>B</div>
        <div className={mirrorLetter} style={{...mirrorLetterStyle, ...mirrorB}}>D</div>
        <div className={mirrorLetter} style={{...mirrorLetterStyle, ...mirrorC}}>O</div>
        <Title scrollY={scroll} children={
          <button style={cloudWrapper}>
          <div  style={{display: 'none'}} class="bg-red duration-300 ease-linear transform  w-[30px] h-[30px] rounded-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolr" class="bi bi-clouds-fill" viewBox="0 0 16 16"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"></path><path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path></svg></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-clouds-fill" viewBox="0 0 16 16"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"></path><path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path></svg>
          

            
          </button>
        }
         colr={colr}/>
        
        
        
      </div>
      <Works scrollY={scroll} colr={colr}/>
      <div ref={cursorRef} className={styles.cursor}>
          <div ref={dotRef} className={styles.redDot}></div>
        </div>
    </main>
  );
}

