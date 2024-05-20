'use client';
import styles from './page.module.scss';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
const urls = ['/kitten1.jpg',  '/kitten2.jpg', '/kitten1.jpg', '/kitten3.jpg', '/kitten4.jpg', '/kitten2.jpg',
    ,'/kitten5.jpg'];

export default function Works({color}) {
    const [isMobile, setIsMobile] = useState(false);
    const [startIndex, setIndex] = useState(0);
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
    return (
        
        
        <div className={styles.works}>
                 <h2 style={{
                    left: isMobile ? '28%' : '40%',
                    textShadow: `-20px -20px rgb(255, 255, 255, 0.2)`,
                 }}>Works</h2>
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
                    <button className={styles.preview}>Preview</button>
                   </div>
                   ) 
                }
                 </div>
                 <div ref={cursorRef} className={styles.cursor}>
          <div className={styles.redDot}></div>
        </div>
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

  