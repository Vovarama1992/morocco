'use client';
import styles from './page.module.scss';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
const urls = ['/kitten1.jpg',  '/kitten2.jpg', '/kitten1.jpg', '/kitten3.jpg', '/kitten4.jpg', '/kitten2.jpg',
    ,'/kitten5.jpg'];

    export default function Works({ colr, scrollY }) {
      const [isMobile, setIsMobile] = useState(false);
      const [startIndex, setIndex] = useState(0);
      const [isModal, setModal] = useState(false);
      const [chosenUrl, setChose] = useState(null);
    
      const worksTitle = `  absolute text-[80px] text-custom-black text-stroke-white transition-transform duration-700 ease transform left-[17%] top-[17%] mb-0 font-goku font-medium ${
        scrollY < 200 ? ' transition-transform duration-700 ease transform translate-x-[-37%] translate-y-[-47%]' : ''
      }`;
    
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
          cursor.style.left = `${x}px`;
          cursor.style.top = `${y}px`;
        };
    
        document.addEventListener('mousemove', mouseMove);
    
        return () => {
          document.removeEventListener('mousemove', mouseMove);
        };
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
          <h2 className="relative">
            <div className={worksTitle} style={{ WebkitTextStroke: `1px ${colr}` }}>
              Works
            </div>
            <div className="relative mb-0 font-goku font-medium text-custom-white text-[60px]">Works</div>
          </h2>
          <div className={styles.grid}>
            {urlsToShow.map((url, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  boxSizing: 'border-box',
                  background: 'inherit',
                  padding: '30px',
                  width: isMobile ? '90%' : '45%',
                  height: '420px',
                  borderRadius: '25px',
                  borderLeft: `3px solid ${colr}`,
                  borderRight: `3px solid ${colr}`,
                  borderBottom: `3px solid ${colr}`,
                  marginLeft: isMobile ? '0%' : index % 2 === 0 ? '0%' : '50%',
                  marginTop: isMobile ? '29px' : index !== 0 ? '-190px' : '20px',
                }}
              >
                <div className={styles.imgContainer}>
                  <Image src={url} alt='' layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <button
                  onClick={() => openModal(url)}
                  style={{
                    position: 'absolute',
                    color: 'white',
                    width: '28%',
                    height: '9%',
                    left: '50%',
                    top: '-5%',
                    background: `${colr}`,
                    borderRadius: '8px',
                    cursor: 'none',
                  }}
                >
                  Preview
                </button>
              </div>
            ))}
          </div>
          <div ref={cursorRef} className={styles.cursor}>
            <div className={styles.redDot}></div>
          </div>
          {isModal && (
            <div onClick={() => setModal(false)} className={styles.openUrl}>
              <Image alt='' src={chosenUrl} layout="fill" objectFit="cover" objectPosition="center" />
            </div>
          )}
        </div>
      );
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

