import { useEffect, useState } from 'react';

function WeatherApp() {
  // CREATE 3 state: description, wind, temperature
  // CREATE 2 state, latitude, longitude
  // CREATE inputs for latitude and longitude
  const [latitude, setLatitude] = useState(14.6042); // Defaults to Manila
  const [longitude, setLongitude] = useState(120.9822); // Defaults to Manila
  const [wind, setWind] = useState('...');
  const [temperature, setTemperature] = useState('...');
  
  // CREATE fetchData function
  //   CALL https://goweather.herokuapp.com/weather/Manila
  //   SET the new state of description, wind, temp
  const fetchData = async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    )
    const json = await response.json();
    
    console.log('Fetch Data', json);
    // setDescription(json.description);
    setWind(json.current.wind_speed_10m);
    setTemperature(json.current.temperature_2m);
  };

  const handleLatitude = (e) => {
    setLatitude(e.target.value)
  }

  const handleLongitude = (e) => {
    setLongitude(e.target.value);
  }

  // USE the useEffect hook
  //   CALL the fetchData function

  useEffect(() => {
    fetchData()
  }, [latitude, longitude])
  // Add latitude & longitude as dependencies

  return (
    <>
      <input type="text" value={latitude} onChange={handleLatitude} />
      <input type="text" value={longitude} onChange={handleLongitude} />
      <h2>Wind: {wind}</h2>
      <h2>Temperature: {temperature}</h2>
    </>
  );
}

export default WeatherApp;
