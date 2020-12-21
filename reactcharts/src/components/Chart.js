import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Boston','Worcester','Springfield','Lowell','Cambridge','New Bedford'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            617594,
	                        181045,
	                        153060,
	                        106519,
	                        105162,
	                        95072
                        ],
                        backgroundColor:[
                            'rgb(153, 102, 102)',
                            'rgb(242, 13, 13)',
                            'rgb(102, 0, 0)',
                            'rgb(0, 255, 255)',
                            'rgb(0, 255, 0)',
                            'rgb(255, 128, 0)'
                        ]
                    }
                ]
            }
        }
    }
  render() {
    return (
      <Bar
        data={this.state.chartData}
        options={{
            title:{
                display:true,
                text:'Largest cities in Massachusetts'
            },
            legend:{
                display:true,
                position:'right'
            }
        }}
      />
    );
  }
}

export default Chart;
