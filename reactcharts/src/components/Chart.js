import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps={
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }
  render() {
    return (
      <Bar
        data={this.state.chartData}
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest cities in Massachusetts',
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
        }}
      />
    );
  }
}

export default Chart;
