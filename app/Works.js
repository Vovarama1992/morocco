'use client';
import styles from './page.module.scss';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
const urls = ['/kitten1.jpg',  '/kitten2.jpg', '/kitten1.jpg', '/kitten3.jpg', '/kitten4.jpg', '/kitten2.jpg',
    ,'/kitten5.jpg'];

export default function Works({colr}) {
    const [isMobile, setIsMobile] = useState(false);
    const [startIndex, setIndex] = useState(0);
    const [isModal, setModal] = useState(false);
    const [chosenUrl, setChose] = useState(null);
    function openModal(url) {
      setModal(true);
      setChose(url);
    }
    let urlsToShow = getGallery(urls, startIndex);
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
      const workers = {
        position: 'absolute',
        left: isMobile ? '28%' : '40%',
        
    top: '0%',
        
    };
    const trueWorks = {
      position: 'relative',
      zIndex: 9999,
    }
    const worksShadow = {
      position: 'absolute',
      
      left: '-10%',
      top: '-12%',
      colr: 'rgba(255, 255, 255, 0.1)',
      webkitTextStroke: `1px ${colr}`,
      marginBottom: '0px',
      fontFamily: 'Goku',
      fontWeight: 100,
    }

    const previewStyle = {
      position: 'absolute',
      colr: 'white',
      width: '28%',
      height: '9%',
      left: '50%',
      top: '-5%',
      background: `${colr}`,
      borderRadius: '8px',
      cursor: 'none',
  };
    return (
        
        
        <div className={styles.works}>
                 <h2 style={workers}>
                  <div style={worksShadow}>Works</div>
                  <span style={trueWorks}>Works</span></h2>
                 <div className={styles.grid}>
                   {urlsToShow.map((url, index) =>
                   <div key={index} className={styles.imgWrapper} style={{
                    width: isMobile ? '90%' : '45%',
              marginLeft: isMobile ? '0%' : (index % 2 === 0 ? '0%' : '50%'),
              marginTop: isMobile ? '29px' : (index !== 0 ? '-190px' : '20px'),
                  }} >
                    
                    <div className={styles.imgContainer}>
                    <Image
                        src={url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        />
                    </div>
                    <button onClick={() => openModal(url)} style={previewStyle}>Preview</button>
                   </div>
                   ) 
                }
                 </div>
                 <div ref={cursorRef} className={styles.cursor}>
          <div className={styles.redDot}></div>
        </div>
        {isModal && <div onClick={() => setModal(false)} className={styles.openUrl}>
          <Image 
          src={chosenUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          />
          </div>}
        </div>
    )
}

function getGallery(array, startIndex) {
    const result = [];
    const arrayLength = array.length;
  
    for (let i = 0; i < 5; i++) {
      const currentIndex = (startIndex + i) % arrayLength;
      result.push(array[currentIndex]);
    }
  
    return result;
  }

