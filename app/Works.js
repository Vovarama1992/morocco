'use client';
import styles from './page.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
const urls = ['/kitten1.jpg',  '/kitten2.jpg', '/kitten1.jpg', '/kitten3.jpg', '/kitten4.jpg', '/kitten2.jpg',
    ,'/kitten5.jpg'];

export default function Works() {
    const [isMobile, setIsMobile] = useState(false);
    const [startIndex, setIndex] = useState(0);
    let urlsToShow = getGallery(urls, startIndex);
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
                    left: isMobile ? '28%' : '40%'
                 }}>Works</h2>
                 <div className={styles.grid}>
                   {urlsToShow.map((url, index) =>
                   <div key={index} className={styles.imgWrapper} style={{
                    width: isMobile ? '90%' : '45%',
              marginLeft: isMobile ? '0%' : (index % 2 === 0 ? '0%' : '50%'),
              marginTop: isMobile ? '22px' : (index !== 0 ? '-190px' : '20px'),
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