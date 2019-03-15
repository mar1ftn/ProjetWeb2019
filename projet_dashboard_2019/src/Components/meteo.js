import React, { Component } from 'react';

const API = "ac156d7e0497ba1cd37142f49280cc88"

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined
        }
        this.getWeather();
    }

    getWeather = async () => {
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=' + API +'&units=metric');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description
        });
    }

    render() {
        return (
            <div>
                <h2 className="py-2">Weather</h2>
                <p>Temperature: {this.state.temperature}°C</p>
                <p>City: {this.state.city}</p>
                <p>Country: {this.state.country}</p>
                <p>Humidity: {this.state.humidity}%</p>
                <p>Description: {this.state.description}</p>
            </div>
        );
    }
}

export default Weather;