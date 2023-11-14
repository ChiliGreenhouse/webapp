import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleCounter from "./ExampleCounter";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <p>
                    Nothing to see here yet 😕
                    <br/>
                    Meanwhile enjoy this counter component:
                </p>
                <br/>
                <ExampleCounter/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
