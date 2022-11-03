import React, { useState } from 'react'
import "./temp.css"

const Temp = () => {
  const [city, setCity] = useState("Lahore")
  // const [search, setSearch] = useState("Karachi")


  return (
    <div className='weather-app'>
      <div className="card">
        <div className="search">
          <input type="text" className='search-bar' placeholder='Search' />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="weather">
          <h2 className='city'>{city}</h2>
          <div className="temp">21.4&#176;C</div>
          <div className="bottom">
            <div className="description">Cloudy</div>
            <div className="humidity">Humidity: 18%</div>
            <div className="wind">Wind speed: 7.2 km/h</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Temp
