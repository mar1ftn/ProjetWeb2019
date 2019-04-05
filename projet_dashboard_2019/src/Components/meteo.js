import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import removespace from 'remove-whitespace';
import textcleaner from 'text-cleaner';

const API = "ac156d7e0497ba1cd37142f49280cc88"

class Weather extends Component {
    
    
     state = {
        //afficher les stations
        stationliste: [],
         //ville selectionée
         ville:'Tignes',
          //recuperer les informations de la météo
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined
    }

        onSelectedStationChange = event => {
                this.setState({ ville: event.target.value });
            this.getWeather(textcleaner(removespace(event.target.value)).remove("'").valueOf());
        }

    constructor(props){
        super(props);
        
        var self=this;  
    axios.get('http://localhost:3000/api/station')
    .then(function (response) {
        self.setState({stationliste: response.data})
    })
    .catch(function (error) {
        console.log(error);
    });
        
        this.getWeather(removespace(this.state.ville));
    }

    getWeather = async (ville) => {
            console.log(ville);
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&appid=' + API +'&units=metric');
        const data = await api_call.json();
        console.log(data.cod);
        if(data.cod==200){
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description
        });
        }else{
            this.setState({
            temperature: "ville non trouvé",
            city: "ville non trouvé",
            country: "ville non trouvé",
            humidity: "ville non trouvé",
            description: "ville non trouvé"
        });
    }
    }

    render() {
        return (
            <div>
                <h2 className="py-2">Météo des stations</h2>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" onChange={this.onSelectedStationChange} >
                                {this.state.stationliste.map((station) => (
                                    <option value={station.nom}> {station.nom} </option>
                                ))}
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