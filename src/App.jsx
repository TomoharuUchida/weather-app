import React,{useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a03390e4f5933c7bc979469dcfda187b`

  const searchLocation = (event) => {
    if (event.key ==="Enter") {
      axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location!!"
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name }</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.floor(data.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>


        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{Math.floor(data.main.feels_like)}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{Math.floor(data.wind.speed)}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        
     </div>
    </div>
  );
}

export default App;
