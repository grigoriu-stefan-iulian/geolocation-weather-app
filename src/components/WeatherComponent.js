import React from 'react'

const WeatherComponent = props => (
    <div className="weather">
        <label className="weather__label">Celsius
            <input className="weather__label--radio" id="celsius" type="radio" name="temp"></input>
            <span className="weather__label--checkmark"></span>
        </label>
        <label className="weather__label">Fahrenheit
            <input className="weather__label--radio" id="fahrenheit" type="radio" name="temp"></input>
            <span className="weather__label--checkmark"></span>
        </label>
        <h1 className="weather__display">Temperature: {props.temp}</h1>
        <h3>City: <span>{props.city}</span></h3>
        <h3>Pressure: <span>{props.pressure}</span></h3>
        <h3>Humidity: <span>{props.humidity}</span></h3>
        <h3>Wind: <span>{props.wind}</span></h3>
    </div>
)

export default WeatherComponent