import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  constructor() {
    super();

    this.state = {
      chartData: {}
    }
  }
  componentWillMount(){
    this.getChartData();
  }
  getChartData(){
    this.setState({
      chartData:{
        labels: ['New York','Los Angles','Chicago','Houston','Phoneix','San Franciso'],
        datasets:[
            {
                label:'Population',
                data:[
                  8405837,
                  3884307,
                  2718782,
                  2195914,
                  1513367,
                  837,442
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
    })
  }
  render() {
    return <Chart chartData={this.state.chartData} location="America" />;
  }
}

export default App;
