import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import randomColor from 'randomcolor';
import axios from 'axios';


export default class Line extends PureComponent {
    state = {
        data : [
  {
    name: 'Page A', nb: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', nb: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', nb: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', nb: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', nb: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', nb: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', nb: 3490, pv: 4300, amt: 2100,
  },
]
    }

constructor(props){
     super(props);
    
    var data = [];
    var self=this;  
    
     axios.get('http://localhost:3000/api/massif')
    .then(function (response) {
        response.data.forEach(function(element) {
            var newdata = {
                'name': element.nom , 
                'nb':element.nb_station , 
                'amt':randomColor()
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
      <AreaChart
        width={500}
        height={400}
        data={this.state.data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="nb" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}
