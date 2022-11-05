import React, { useState} from 'react'
import "./temp.css"
import axios from 'axios'

const Temp = () => {
  const [data, setData] = useState([])
  const [location, setLocation] = useState('')


  let url =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ac278467ff1288d6a0d5b9fd5ad3facf`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        // console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className='weather-app'>
      <div className="card">
        <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
          className='search-bar'
          />
        </div>
        <div className="weather">
          <h2 className='city'>{data.name}</h2>
          {data.main ? <p className='temp'>{data.main.temp.toFixed()}°C</p> : null}
          <div className="bottom">
          {data.weather ? <p className='description'>{data.weather[0].main}</p> : null}
          {data.main ? <p className='humidity'>Humidity: {data.main.humidity}%</p> : null}
          {data.wind ? <p className='wind'>Wind Speed: {data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Temp;
