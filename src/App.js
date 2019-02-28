import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

function showStateAndProps(text1) {
    return function(state, props){
      console.log(state, props);
      return {text1: text1};
    };
}

class _App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "", text1: ""
    };
  }

  componentDidMount() {
   
  }

  onChange = (e) => {
    this.setState({text: e.target.value}, function(){console.log(this.state)}.bind(this));
  }

  onChange1 = (e) => {
    this.setState(showStateAndProps(e.target.value))
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.onChange}/>
        <input onChange={this.onChange1}/>
        <h1>{this.state.text}</h1>
        <h1>{this.state.text1}</h1>
      </div>
    );
  }
}

export default connect(state => state)(_App);
