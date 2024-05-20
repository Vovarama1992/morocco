'use client';
import { useState, useEffect, useRef } from 'react';
import styles from "./page.module.scss";
import Works from './Works';
import './globals.css';

const [name, surname] = ['Osama', 'Naimallah'];
const profession = "Full-stack developer and researcher ";
const profdesc = 'from Ust-Kamenogorsk been working as freelancer with passion and dream to be the greatest';
const city = "Ekt";
const weather = '13°C';
const time = '5:33PM';

export default function Home() {
  const [сolor, setColor] = useState('red');
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  useEffect(() => {
    
  
    const cursor = cursorRef.current;
    
  
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

  

  function generateGradient(color) {
    let gradient;
    switch(color) {
      case 'red':
        gradient = 'radial-gradient(circle at top center, red 0%, #800000 2%, #400000 8%, black 30%)';
        break;
      case 'green':
        gradient = 'radial-gradient(circle at top center, green 0%, #008000 2%, #004000 8%, black 30%)';
        break;
      case 'blue':
        gradient = 'radial-gradient(circle at top center, blue 0%, #000080 2%, #000040 8%, black 30%)';
        break;
      case 'yellow':
        gradient = 'radial-gradient(circle at top center, yellow 0%, #808000 2%, #404000 8%, black 30%)';
        break;
      default:
        gradient = 'radial-gradient(circle at top center, white 0%, black 100%)';
    }
    return gradient;
  }

  const gradient = generateGradient(сolor);

  const mirrorLetter = {
    position: 'fixed',
    fontSize: isMobile ? '75px' : '105px',
    color: 'white',
    fontWeight: '800',
    textShadow: `-8px 8px ${сolor}`,
  };

  const shadow = {
    textShadow: `-20px -20px 0 rgb(0, 255, 0, 0.1), -20px -20px 0 ${сolor}`,
    marginBottom: '0px',
    WebkitTextStroke: `2px ${сolor}`,
    textStroke: `1px ${сolor}`,
    
  };

  function onColor(e) {
    const newColor = e.target.getAttribute('data-color');
    setColor(newColor);
  }
  const mirrorA = {
    position: 'fixed',
    left: `22%`,
  top: `calc(70% - ${scroll}px)`,
  }
  const mirrorB = {
    position: 'fixed',
    left: '70%',
    top: `calc(8% - ${scroll * 0.2}px)`,
}
const mirrorC = {
  position: 'fixed',
  left: '70%',
  top: `calc(90% - ${scroll * 0.8}px)`,
}

  return (
    <main className={styles.container} style={{ background: gradient }}>
      <div className={styles.titleWrapper}>
        <div className={styles.gradientChanger}>
          <div className={`${styles.ball} ${styles.ballyellow}`} onClick={onColor} data-color='yellow'></div>
          <div className={`${styles.ball} ${styles.ballred}`} onClick={onColor} data-color='red'></div>
          <div className={`${styles.ball} ${styles.ballgreen}`} onClick={onColor} data-color='green'></div>
          <div className={`${styles.ball} ${styles.ballblue}`} onClick={onColor} data-color='blue'></div>
        </div>
        <div style={{...mirrorLetter, ...mirrorA}}>A</div>
        <div style={{...mirrorLetter, ...mirrorB}}>D</div>
        <div style={{...mirrorLetter, ...mirrorC}}>O</div>
        <div className={styles.title}>
          <div style={shadow}>{name}</div>
          <div className={styles.noShadow}>{surname}</div>
          <div className={styles.description}>
            <span>{profession}</span>{profdesc}
          </div>
          <div className={styles.menu}>
            <div className={styles.info}>{city}</div>
            <div className={styles.info}>{weather}</div>
            <div className={styles.info}>{time}</div>
          </div>
        </div>
        <div ref={cursorRef} className={styles.cursor}>
          <div className={styles.redDot}></div>
        </div>
        
      </div>
      <Works color={сolor}/>
    </main>
  );
}


