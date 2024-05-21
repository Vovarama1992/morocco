'use client';
import { useState, useEffect, useRef } from 'react';
import styles from "./page.module.scss";
import Works from './Works';
import './globals.css';

const [name, surname] = ['Osama', 'Naimallah'];
const profession = "Full-stack developer and researcher ";
const profdesc = 'from Ust-Kamenogorsk with a passion for building robust and scalable web applications. I specialize in both front-end and back-end technologies, bringing creative solutions to complex problems.';
const city = "Ekt";
const weather = '13°C';
const time = '5:33PM';


export default function Home() {
  const [сolor, setColor] = useState('red');
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
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
  const titleStyle = {
    position: 'absolute',
    top: '18%',
    paddingTop: '5%',
    height: isMobile ? '480px' : 'auto',
    left: isMobile ? '19%' : '28%', 
    width: isMobile ? '65%' : '45%',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    
    fontWeight: 600, 
    fontSize: isMobile ? '80px' : '140px',
    
    color: 'white',
    borderBottom: '2px dotted rgb(9, 4, 4)', 
  };
  const descriptionStyle = {
    marginTop: '7px',
    lineHeight: isMobile ? '1.5' : '1.9',
    fontWeight: 100,
    
    width: isMobile ? '140%' : '90%',
    fontSize: isMobile ? '15px' : '19px',
    fontFamily: 'Raleway, sans-serif',
    textAlign: 'center',
  };
  const span = {
    fontSize: isMobile ? '22px' : '27px',
    fontWeight: 100,
    fontFamily: 'TrumpGothicPro-Bold',
  }

  

  function generateGradient(color, toBlack) {
    if (isMobile) {
      toBlack = 14;
    } 
    else toBlack = 18;
  

    let gradient;
    switch(сolor) {
      case 'red':
        gradient = `radial-gradient(circle at top center, #E75480 4%,  black ${toBlack}%)`;
        break;
      case 'green':
        gradient = `radial-gradient(circle at top center, lime 0%, #00FF00 2%, #008000 5%, black ${toBlack}%)`;
        break;
      case 'blueviolet':
        gradient = `radial-gradient(circle at top center, #000080 0%, #4B0082 2%, #8A2BE2 5%, black ${toBlack}%)`;
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

  const gradient = generateGradient(сolor);

  const mirrorLetter = {
    position: 'fixed',
    transition: 'left 0.9s ease, top 0.9s ease',
    fontSize: isMobile ? '85px' : '175px',
    color: 'white',
    fontWeight: '200',
    fontFamily: 'Goku',
    textShadow: `-8px 13px ${сolor}`,
  };

  const shadow = {
    position: 'absolute',
    left: '-6%',
    top: '-17%',
    color: 'rgba(255, 255, 255, 0.1)',
    webkitTextStroke: `1px ${сolor}`,
    marginBottom: '0px',
    fontFamily: 'Goku',
    fontWeight: 100,
   
    
    
  };
  const withShadow = {
    color: 'rgba(255, 255, 255, 1)',
    position: 'relative',
    marginBottom: '0px',
    fontFamily: 'Goku',
    fontWeight: 100,
  }

  const noShadow = {
    marginTop: isMobile ? '-10px' : '-40px',
    fontFamily: 'Goku, sans-serif',
    fontWeight: 100,
  }

  const gradientChangerStyles = {
    position: 'fixed',
    top: '38%',
    left: isMobile ? '-10%' : '4%',
    width: '1px',
    height: '312px',
    background: 'white',
  
};


  function onColor(e) {
    const newColor = e.target.getAttribute('data-color');
    setColor(newColor);
   
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
  top: `calc(68% - ${scroll * 0.8}px)`,
}
const od = {
  position: 'absolute',
  fontSize: '46px',
  fontFamily: 'Goku',
  width: '500px',
  height: '500px',
  color: 'white',
  left: '-9%',
  top: '56px',
}
const scroller = {
  position: 'fixed',
  width: '500px',
  height: '500px',
  color: 'white',
  left: isMobile ? '70%' : '90%',
  top: '16px',
}
const lineA = {
  position: 'absolute',
  top: '10%',
  width: '55px',
  height: '1px',
  background: 'white'
}
const lineB = {
  position: 'absolute',
  top: '12%',
  width: '55px',
  height: '2px',
  background: 'white'
}
const scrollLine = {
  position: 'absolute',
  left:  '5%',
  top: '18%',
  opacity: 0.5,
  width: '1px',
  height: isMobile ? '300px' : '460px',
  background: 'white'
}
const scrolledLine = {
  position: 'absolute',
  left: '0%',
  top: '0%',
  width: '200%',
  background: `${сolor}`,
  height: `${scrollHeight}%`,
}

const point = {
  color: 'red',
  fontSize: '40px',
}
const cloudWrapper = {
  width: '50px',
  marginLeft: '-10px',
  marginTop: '-2px',
  borderRadius: '50%',
  border: '4px solid rgba(0, 0, 0, 0.5)',
  background: `${сolor}`,
  
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 


}
const shadowCombo = {
  position: 'relative'
}
const cloud = {
  width: '30px',
  height: '30px',
  background: 'white,'
}
  return (
    <main className={styles.container} style={{ background: gradient }}>
      <div className={styles.titleWrapper}>
        <div style={od}>OD<span style={point}>.</span>
        <div style={scroller}>
        
          <div style={lineA}></div>
          
          <div style={lineB}></div>
          <div style={scrollLine}>
          <div style={scrolledLine}></div>
          </div>
        
          </div>
                              
        </div>
        <div style={gradientChangerStyles }>
          <div className={`${styles.ball} ${styles.ballred}`} onClick={onColor} data-color='red'></div>
          <div className={`${styles.ball} ${styles.ballblueDark}`} onClick={onColor} data-color='blueviolet'></div>
          <div className={`${styles.ball} ${styles.ballblueLight}`} onClick={onColor} data-color='lightblue'></div>
          <div className={`${styles.ball} ${styles.ballyellow}`} onClick={onColor} data-color='yellow'></div>
          <div className={`${styles.ball} ${styles.ballblueLight}`} onClick={onColor} data-color='lightblue'></div>
          <div className={`${styles.ball} ${styles.ballgreen}`} onClick={onColor} data-color='green'></div>
        </div>
        <div style={{...mirrorLetter, ...mirrorA}}>B</div>
        <div style={{...mirrorLetter, ...mirrorB}}>D</div>
        <div style={{...mirrorLetter, ...mirrorC}}>O</div>
        <div style={titleStyle}>
          <div style={shadowCombo}>
            <div style={shadow}>{name}</div>
            <div style={withShadow}>{name}</div>
          </div>
          <span style={noShadow} >{surname}</span>
          <div style={descriptionStyle}>
            <span style={span}>{profession}</span>{profdesc}
          </div>
          <div className={styles.menu}>
            <div className={styles.info}>{city}</div>
            <div className={styles.info}>{weather}</div>
            <div className={styles.info}>{time}</div>
            
            <div style={cloudWrapper}>
            <div  style={{display: 'none'}} class="bg-red duration-300 ease-linear transform  w-[30px] h-[30px] rounded-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clouds-fill" viewBox="0 0 16 16"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"></path><path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path></svg></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clouds-fill" viewBox="0 0 16 16"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"></path><path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path></svg>
            <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"></path>
            <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path>

              {/* <img style={cloud} src='/cloud.png'></img> */}
            </div>
          
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


