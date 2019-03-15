import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Camembert extends Component{

	constructor(props){
    super(props);
    this.state = {
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
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
					],
					hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
					]
				}]
			}
    }
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