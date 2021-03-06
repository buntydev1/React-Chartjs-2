import React, { Component } from "react";
import {Line,Polar, Doughnut} from 'react-chartjs-2';

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
        legendPosition:'right',
        location:'city'
    }
  render() {
    return (
        <div>
      <Line
        data={this.state.chartData}
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest cities in '+this.props.location,
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
        }}
      />
      <Polar
        data={this.state.chartData}
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest cities in'+this.props.location,
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
        }}
      />
      <Doughnut
        data={this.state.chartData}
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest cities in'+this.props.location,
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
        }}
      />
      </div>
    );
  }
}

export default Chart;
