import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import randomColor from 'randomcolor';
import axios from 'axios';

class Chart extends Component{
    
    state = {
        chartData:{
        labels: ['Tignes','Meribel','La Plagne'],
        datasets: [
          {
            label: 'pistes',
            data: [20, 50, 200],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(25, 199, 132, 0.6)','rgba(55, 299, 12, 0.6)']
          }
        ]
      }
    }
  constructor(props){
    super(props);
    var labels = [];
    var data = [];
    var color;
    var backgroundColor = [];
      
    var self=this;  
    axios.get('http://localhost:3000/api/station')
    .then(function (response) {
        
        var col=randomColor();
        response.data.forEach(function(element) {
            labels.push(element.nom);
            data.push(element.nb_piste);
            backgroundColor.push(col);
    });
        
    }).then(function (){
        self.setState({chartData: {
        labels,
        datasets: [
          {
            label: 'pistes',
            data,
            backgroundColor
          }
        ]
      }});
    })
    .catch(function (error) {
        console.log(error);
    });
      
      
  }


  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'Nombre de pistes par station francaise',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      </div>
    )
  }
}

export default Chart;