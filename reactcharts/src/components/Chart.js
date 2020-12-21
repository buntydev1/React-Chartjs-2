import React, { Component } from "react";
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component {
    
  render() {
    return (
      <Bar
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    );
  }
}

export default Chart;
