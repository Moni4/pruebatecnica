import React, { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';

import fondo from './assets/gradient.png';
import './App.css';

import WeatherCard from './components/WeatherCard';

function App() {

  const [key, setKey] = useState('123456')

  const [weatherData, setWeatherData] = useState<any>(null);

  const handleChange = (event: any) => {
    setKey(event.target.value);
  }

  const submit = () => {
    axios.get(`http://localhost:8080/api/v1/weather/${key}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err)
        setWeatherData(null)
      });
  }

  return (
    <div style={styles.main}>

      <div className="header">
        <Stack spacing={2} direction="row">
          <TextField
            id="key"
            label="key"
            variant="filled"
            value={key}
            onChange={(e) => handleChange(e)} />
          <Button variant="contained" onClick={submit}>Consultar</Button>
        </Stack>

        {weatherData ? <WeatherCard weatherData={weatherData} /> : null}

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
