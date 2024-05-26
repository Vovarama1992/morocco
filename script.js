

async function timer(city) {
    const res = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=467C2QPXDHOE&format=xml&by=zone&zone=${city}`);
    const text = await res.text();
    
    
    
  
    
    return text;
}

async function fetchData() {
    const r = await timer('Barnaul');
    console.log(r);
}

fetchData();
