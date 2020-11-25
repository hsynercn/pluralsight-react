import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Hello/>
                <Unified/>
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
    return <div>Hello func!</div>
}

function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>
            {props.message}
        </div>
    );
}

function Unified() {
    const [counter, setCounter] = useState(55);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return (<div>
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Button onClickFunction={incrementCounter} increment={100}/>
        <Display message={counter}/>
    </div>);
}

export default App;
