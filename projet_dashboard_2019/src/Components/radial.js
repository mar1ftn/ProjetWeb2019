import React, { PureComponent } from 'react';
import { Tooltip, RadialBarChart, Legend, RadialBar} from 'recharts';
import randomColor from 'randomcolor';
import axios from 'axios';



export default class Radial extends PureComponent {
    
    state = {
        data : [
  {
    "name": "la courgette",
    "level": 4,
    "fill": "#8884d8"
  },
    {
    "name": "la puñette",
    "level": 2,
    "fill": "#8884d8"
  }
]
              
    }

constructor(props){
    super(props);
    
    var data = [];
    var self=this;  
    
    axios.get('http://localhost:3000/api/horspiste')
    .then(function (response) {
        response.data.forEach(function(element) {
            var newdata = {
                'name': element.nom + ' ' +element.stationName , 
                'level':element.difficulte , 
                'fill':randomColor()
            }
        data.push(newdata);
    });   
        
    }).then(function(){
        console.log(data);
        self.setState({data: data });
    })
    .catch(function (error) {
        console.log(error);
    });
      
      
  }


  render() {
    return (
        
        
        <RadialBarChart 
        width={450} 
        height={300} 
        innerRadius="10%" 
        outerRadius="80%" 
        data={this.state.data} 
        startAngle={270} 
        endAngle={0}
        
        >
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='level' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
    );
  }
}