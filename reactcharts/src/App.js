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
    })
  }
  render() {
    return <Chart chartData={this.state.chartData} location="Massachusetts" />;
  }
}

export default App;
