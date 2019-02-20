import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;
