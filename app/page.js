
import styles from "./page.module.scss";
import Works from './Works';
const [name, surname] = ['Osama', 'Naimallah'];
const profession = "Full-stack developer and researcher ";
const profdesc= 'from Ust-Kamenogorsk been working as freelancer with passion and dream to be the greatest';
const city = "Ekt";
const weather = '13°C';
const time = '5:33PM';
export default function Home() {
  
  return (
    <main className={styles.container}>
            <div className={styles.title}>
            <div className={styles.shadow}>{name}</div>
           
           
            <div className={styles.noShadow}>{surname}</div>
            <div className={styles.description}>
              <span >{profession}</span>{profdesc}
            </div>
            <div className={styles.menu}>
              <div  className={styles.info}>{city}</div>
              <div className={styles.info}>{weather}</div>
              <div className={styles.info}>{time}</div>
            </div>
            </div>
            <Works />
            
            
    </main>
  );
}
