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
  getChartData(){
    this.setState({

    });
  }
  render() {
    return <Chart />;
  }
}

export default App;
