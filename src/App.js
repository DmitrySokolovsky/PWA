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
    this.setState({text: e.target.value}, function(){console.log(arguments)});
  }

  onChange1 = (e) => {
    this.setState(showStateAndProps(e.target.value))
  }

<<<<<<< HEAD
  render() {
    return (
      <div className="App">
        <input onChange={this.onChange}/>
        <input onChange={this.onChange1}/>
        <h1>{this.state.text}</h1>
        <h1>{this.state.text1}</h1>
=======
class App extends Component {
  constructor(props) {
    super(props);
    this.defferedPrompt = null;

    setTimeout(() => {
      console.log("321654897")
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log("EVT");
        e.preventDefault();
        this.deferredPrompt = e;
      }, 0);
    });
    
  }

  handleUserInstallation = () => {  
    console.log(this.deferredPrompt);  
    this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Good');
        } else {
          console.log('Not Good');
        }
        this.deferredPrompt = null;
    });

      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div onClick={this.handleUserInstallation}>Do you want to install the app?</div>
        </header>
>>>>>>> 7114225da045b55c862e04f5633f3127a457486e
      </div>
    );
  }
}

export default connect(state => state)(_App);
