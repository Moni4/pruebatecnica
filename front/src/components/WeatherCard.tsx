import React from "react";
import { Card, CardContent, Divider } from '@mui/material';

interface WeatherCardProps {
    weather: any,
    base: any,
    main: any,
    wind: any,
    sys: any,
    name: any,
    cod: any,
}

export default function WeatherCard(props: any) {

    const currentDate = new Date();

    const day = currentDate.getDay().toString();
    const month = currentDate.toLocaleString('es', { month: 'long' });
    const year = currentDate.getFullYear().toString();

    console.log('props', props);

    return (
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
                {props.weatherData.main.temp + '°'}
              </p>
            </div>
            <div id='div-clima'>
              <label id='clima'> <span style={{ fontWeight: 'bolder' }}>Clima / </span>{props.weatherData.weather[0].main}</label>
            </div>
          </div>
          <CardContent>
            <div className='row-all'>
              <div className='row-info'>
                <div id='temp'></div>
                <label>Temperatura</label>
              </div>
              <label>{props.weatherData.main.temp}</label>
            </div>
            <Divider />
            <div className='row-all'>
              <div className='row-info'>
                <div id='hum'></div>
                <label>Húmedad</label>
              </div>
              <label>{props.weatherData.main.humidity + '%'}</label>
            </div>
            <Divider />
            <div className='row-all'>
              <div className='row-info'>
                <div id='wind'></div>
                <label >Velocidad Viento</label>
              </div>
              <label>{props.weatherData.wind.speed + 'm/s'}</label>
            </div>
          </CardContent>
        </Card>
    )
}