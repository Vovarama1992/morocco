'use server';
import Home from './pageinner';





export default async function Page({
    searchParams,
  }) {
    const reload = searchParams?.reload || null;
    const city = await iper();
    const weather = await getWeather(city);
    const time = timer(city);
    return (
        <>
        
        <Home>
            
              
              <div className="text-white text-[21px]">{city}</div>
            <div className="text-white text-[21px]">{weather}°C</div>
            <div className="text-white text-[21px]">{time}</div> 
             
        </Home>
        </>
    )
}

async function getWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bb51a1bebe48592e6f27f16d2cd72e4`);
const weather = await res.json();
        const celsium = weather.main.temp - 273.15;
        return celsium.toFixed(0);
}

async function iper() {
  const res = await fetch('https://ipinfo.io/json?token=be47ae5bf1f230');
  const json = await res.json();
  const city = json.city == "Saint Petersburg" ? "Spb" : json.city;
  return city;
}

function timer() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let meridiem = 'AM';

  
  if (hours > 12) {
      hours -= 12;
      meridiem = 'PM';
  } else if (hours === 0) {
      hours = 12;
  }

  
  if (minutes < 10) {
      minutes = '0' + minutes;
  }

  
  const timeString = `${hours}:${minutes} ${meridiem}`;

  return timeString;
}

