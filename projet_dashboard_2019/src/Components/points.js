import React, { PureComponent } from 'react';
import {  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
  { y: 1, x: 1 },
  { y: 4, x: 2 },
  { y: 2, x: 3 }
];

export default class Points extends PureComponent {

  render() {
    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 75 , bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <YAxis type="number" dataKey="y" name="difficulté" unit="/4" />
        <XAxis type="number" dataKey="x" name="nom" unit="" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    );
  }
}