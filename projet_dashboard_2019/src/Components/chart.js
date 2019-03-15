import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Tignes','Meribel','La Plagne'],
        datasets: [
          {
            label: 'Visiteurs',
            data: [875457, 985448, 515324],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(25, 199, 132, 0.6)','rgba(55, 299, 12, 0.6)']
          }
        ]
      }
    }
  }


  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'Station francaises les plus fréquentées ',
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