import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Hello/>
                <Button/>
                <p>Hello React!</p>
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

function Hello() {
    return <div>Hello React func!</div>
}

function Button() {
    //const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
    const [counter, setCounter] = useState(5)
    return <button onClick={() => {
        setCounter(counter * 2)
    }}>{counter}</button>;
}

function increment() {
    console.log("CLicked!");
}

export default App;
