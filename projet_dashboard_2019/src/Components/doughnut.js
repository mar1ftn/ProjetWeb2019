import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';
import randomColor from 'randomcolor';

class Camembert extends Component{

    
    state = {
        
			doughnutData: {
				labels: [
					'Alpes',
					'Pyrénées',
					'Jura',
					'Vosges',
					'Massif Central',
					'Corse'
				],
				datasets: [{
					data: [5250, 1300, 170, 210, 230, 10],
					backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#FFAAAA',
					'#36BBCC',
					'#FF1234',
                    '#FF9876',
                    '#FF49B5'
					],
					hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#FFAAAA',
					'#36BBCC',
					'#FF1234',
                    '#FF9876',
                    '#FF49B5'
					]
				}]
			}
    }

	constructor(props){
    super(props);
        
        var labels = [];
        var data = [];
        var backgroundColor = [];
        var hoverBackgroundColor = [];
        
    var self=this;  
    axios.get('http://localhost:3000/api/massif')
    .then(function (response) {
        
        response.data.forEach(function(element) {
            labels.push(element.nom);
            data.push(element.nb_kilometre);
            var col=randomColor();
            console.log(col);
            backgroundColor.push(col);
            hoverBackgroundColor.push(col);
    });
        //self.setState({massifliste: response.data})
        
    }).then(function (){
        self.setState({doughnutData: {
            labels,
            datasets: [{
                data,
                backgroundColor,
                hoverBackgroundColor
            }]
        }});
    })
    .catch(function (error) {
        console.log(error);
    });
    
  }

  render() {
    return (
      <div classname="camembert">
				<Doughnut data={this.state.doughnutData}
				 options={{
					title:{
						display:true,
						text:'Kilomètres de pistes par massif montagneux francais',
						fontSize:25
					},
					legend:{
						display:true,
						position:'left'
					}
				}} />
      </div>
    )
  }
}

export default Camembert;