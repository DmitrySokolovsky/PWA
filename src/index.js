import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { appStore } from './store';
    
class Appp extends React.Component {
    render() {
        return (
            <Provider store={appStore}>
                <App foo={"BAR"}/>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Appp/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
