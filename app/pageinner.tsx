'use client';
import { useState, useEffect, useRef} from 'react';

import Link from 'next/link';

import Title from './Title';
import styles from "./page.module.scss";
import Works from './Works';
import './globals.css';


const colours = ['red', 'blueviolet', 'lightblue', 'yellow', 'green'];


 export default function Home({ children }) {
  const [colr, setColr] = useState('blueviolet');
  const [scroll, setScroll] = useState(0);
  
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorRef = useRef(null);
  
  
  const dotRef = useRef(null);
  const scrollHeight = Math.min(scroll * 0.05, 100);
  

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!isMobile) {
      cursor.style.opacity = 1;
    }
      
    

    const mouseMove = (e) => { 
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
      
    };

     
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, );

  useEffect(() => {
    const handleScroll = () => {
      const Y = window.scrollY;
      setScroll(Y);
      
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, );

  const generateGradient = (colr) => {
    let toBlack = isMobile ? 15 : 22;
    let gradient;
    switch (colr) {
      case 'red':
        gradient = `radial-gradient(circle at 50% -2%, #FF4D6D, #1A0A0F ${toBlack}%), black 60%`;
        break;
      case 'green':
        gradient = `radial-gradient(circle at top center, lime 0%, #00FF00 2%, #008000 5%, black ${toBlack}%)`;
        break;
      case 'blueviolet':
        gradient = `radial-gradient(circle at 50% -1%, #6947EF, black ${toBlack}%, black 60%)`;
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
  };

  const gradient = generateGradient(colr);
  const mirrorLetter = `fixed transition-all duration-300 ease-in-out text-white font-light font-goku text-[68px] lg:text-[145px] pointer-events-none`;
  const mirrorLetterStyle = { textShadow: `-8px 13px ${colr}` };

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
  };

  function onColor(newcolr) {
    setColr(newcolr);
    
    
  }

  const mirrorA = {
    
    left: isMobile ? '5%' : '15%',
    top: isMobile ? `calc(65% - ${scroll}px)` : `calc(64% - ${scroll}px)`,
  };
  const mirrorB = {
    
    left: isMobile ? '55%' : '70%',
    top: isMobile ? `calc(10% - ${scroll * 0.2}px)` : `calc(6% - ${scroll * 0.2}px)`,
  };
  const mirrorC = {
    
    left: isMobile ? '78%' : '75%',
    top: isMobile ? `calc(67% - ${scroll * 0.8}px)` : `calc(76% - ${scroll * 0.8}px)`,
  };

  const scrollLineStyles = {
    background: colr,
    height: `${scrollHeight}%`,
    opacity: isMobile ? 0 : 1,
  };

  const scrollLineClasses = `absolute opacity-0 lg:opacity-100 left-0 top-0 w-[200%]`;

  const border = {
    border: '2px solid white',
  };

  return (
    <main
      className="
        relative
        top-[-20px] left-[-20px]
        h-[3300px]
        w-[100vw]
        box-border
        pointer-events-none
        cursor-none
      "
      style={{ background: gradient }}
    >
      <div className="relative left-10 w-[80%] h-[20%]">
        <div className="absolute text-5xl font-goku w-80 h-80 text-white left-[7%] lg:left-[9%] top-[56px]">
       <div className="relative text-[27px] pointer-events-auto lg:text-[44px] left-[-20px]"><a href="https://vercel.com/vladimirs-projects-80cebf7f">OU</a>
       <span className="text-40" style={{ color: colr }}>.</span>
        </div> 
          
          <div className="fixed w-[70px] h-[500px] text-white top-[16px] left-[80%] lg:left-[93%]">
            <div className="hidden lg:block absolute top-[4%] left-[5%] w-[90%] h-[1px] bg-white"></div>
            <div className="hidden lg:block absolute left-[5%] top-[6%] w-[90%] h-[2px] bg-white"></div>
            <div className="hidden lg:block absolute left-[49%] top-[9%] opacity-60 w-[2%] h-[300px] lg:h-[460px] bg-white">
              <div className={scrollLineClasses} style={scrollLineStyles}></div>
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-auto top-[3%] lg:top-[30%] left-[16%] lg:left-[3%] w-[270px] lg:w-[0.1px] h:[0.1px] lg:h-[270px] bg-transparent">
          {colours.map((colour, index) => {
            const colrClass = 'ball' + colour;
            const vektor = isMobile ? 'left' : 'top';
            return (
              <div
                key={index}
                className="absolute flex items-center justify-center left-[-16px] w-[42px] h-[42px] rounded-full border-none bg-transparent"
                style={{ [vektor]: `${index * 25}%`, ...(colr === colour && border) }}
              >
                <div
                  className={`${styles.ball} ${styles[colrClass]} ${colr === colour ? styles.checkedBall : ''}`}
                  onClick={() => onColor(colour)}
                  data-color={colour}
                ></div>
              </div>
            );
          })}
        </div>

        <div className={mirrorLetter} style={{ ...mirrorLetterStyle, ...mirrorA }}>B</div>
        <div className={mirrorLetter} style={{ ...mirrorLetterStyle, ...mirrorB }}>D</div>
        <div className={mirrorLetter} style={{ ...mirrorLetterStyle, ...mirrorC }}>O</div>
        <Title scrollY={scroll}
            
            
             colr={colr} mobile={isMobile}>
              
              {children}
             </Title>
      </div>
      <Works scrollY={scroll} colr={colr} />
      <div  ref={cursorRef} className={styles.cursor}>
        <div ref={dotRef} className={styles.redDot}></div>
      </div>
      <button className="hidden absolute pointer-events-auto left-[1650px] top-[700px] w-[100px] h-[100px] rounded-10 bg-red-500 text-white"><Link href="/LoginZone">LoginZone</Link></button>
    </main>
  );
}


