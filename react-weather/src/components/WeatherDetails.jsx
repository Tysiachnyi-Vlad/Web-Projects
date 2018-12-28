import React from 'react';

function WeatherDetails({ city, temperature }) {
    return (
        <div className="weather-details">
            <div className="city">{city}</div>
            <div className="temperature">{temperature} &deg; C</div>
        </div>
    );
}

export default WeatherDetails;