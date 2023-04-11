import React, { useEffect, useState } from 'react';
import { Card, CardContent, Divider } from '@mui/material';
import axios from 'axios';

import fondo from './assets/gradient.png';
import './App.css';

function App() {

  const currentDate = new Date();
  const key = '123456'

  const day = currentDate.getDay().toString();
  const month = currentDate.toLocaleString('es', { month: 'long' });
  const year = currentDate.getFullYear().toString();

  const [weatherData, setWeatherData] = useState<any>()

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/weather/${key}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={styles.main}>

      <div className="header">
        <Card className='card'>
          <div className="imagenfondo">
            <div>
              <p className="p-title">
                Santiago de cali
              </p>
              <p className="p-date">
                {day + ' ' + month + ' ' + year}
              </p>
              <p className="p-temp">
                {weatherData ? weatherData.main.temp + '°' : null}
              </p>
            </div>
            <div id='div-clima'>
              <label id='clima'> <span style={{ fontWeight: 'bolder' }}>Clima / </span>{weatherData ? weatherData.weather[0].main : null}</label>
            </div>
          </div>
          <CardContent>
            <div className='row-all'>
              <div className='row-info'>
                <div id='temp'></div>
                <label>Temperatura</label>
              </div>
              <label>{weatherData ? weatherData.main.temp : null}</label>
            </div>
            <Divider />
            <div className='row-all'>
              <div className='row-info'>
                <div id='hum'></div>
                <label>Húmedad</label>
              </div>
              <label>{weatherData ? weatherData.main.humidity + '%' : null}</label>
            </div>
            <Divider />
            <div className='row-all'>
              <div className='row-info'>
                <div id='wind'></div>
                <label >Velocidad Viento</label>
              </div>
              <label>{weatherData ? weatherData.wind.speed + 'm/s' : null}</label>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const styles = {
  main: {
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
  }
}

export default App;
