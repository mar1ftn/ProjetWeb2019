import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                <h2 className="py-2">Météo des stations</h2>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" >
                                <option>Tignes</option>
                                <option>La Clusaz</option>
                                <option>Méribel</option>
                                <option>Val Thorens</option>
                                <option>La Plagne</option>
                                <option>Les Arcs</option>
						    </Input>
                        </Col>
                        </FormGroup>
                <p>Temperature: {this.state.temperature}°C</p>
                <p>Station: {this.state.city}</p>
                <p>Pays: {this.state.country}</p>
                <p>Humidité: {this.state.humidity}%</p>
                <p>Description: {this.state.description}</p>
            </div>
        );
    }
}

export default Weather;