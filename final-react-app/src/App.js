import React, {Component} from 'react';
import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';
import * as d3 from 'd3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}

componentDidMount() {
}

render() {
  return <div className = "parent">
    <div className = "child1"></div>
    <div className = "child2"></div>
  </div>;
}
}

export default App;
