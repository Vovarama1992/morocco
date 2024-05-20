'use client';
import { useState } from 'react';
import styles from "./page.module.scss";
import Works from './Works';

const [name, surname] = ['Osama', 'Naimallah'];
const profession = "Full-stack developer and researcher ";
const profdesc = 'from Ust-Kamenogorsk been working as freelancer with passion and dream to be the greatest';
const city = "Ekt";
const weather = '13°C';
const time = '5:33PM';

export default function Home() {
  const [сolor, setColor] = useState('red');

  function generateGradient(color) {
    let gradient;
    switch(color) {
      case 'red':
        gradient = 'radial-gradient(circle at top center, red 0%, #800000 5%, #400000 15%, black 30%)';
        break;
      case 'green':
        gradient = 'radial-gradient(circle at top center, green 0%, #008000 5%, #004000 15%, black 30%)';
        break;
      case 'blue':
        gradient = 'radial-gradient(circle at top center, blue 0%, #000080 5%, #000040 15%, black 30%)';
        break;
      case 'yellow':
        gradient = 'radial-gradient(circle at top center, yellow 0%, #808000 5%, #404000 15%, black 30%)';
        break;
      default:
        gradient = 'radial-gradient(circle at top center, white 0%, black 100%)';
    }
    return gradient;
  }

  const gradient = generateGradient(сolor);

  const mirrorLetter = {
    position: 'absolute',
    fontSize: '105px',
    color: 'white',
    fontWeight: '800',
    textShadow: `-8px 8px ${сolor}`,
  };

  const shadow = {
    textShadow: '-10px -14px rgba(189, 118, 118, 0.6)',
    marginBottom: '0px',
    WebkitTextStroke: `2px ${сolor}`, 
  };

  function onColor(e) {
    const newColor = e.target.getAttribute('data-color');
    setColor(newColor);
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
        <div style={mirrorLetter} className={styles.mirrorA}>A</div>
        <div style={mirrorLetter} className={styles.mirrorB}>D</div>
        <div style={mirrorLetter} className={styles.mirrorC}>O</div>
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
      </div>
      <Works />
    </main>
  );
}


