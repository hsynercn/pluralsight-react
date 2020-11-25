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
    //const handleClick = () => setCounter(counter * 2);
    return <button onClick={props.onClickFunction}>+1</button>;
}

function Display(props) {
    return (<div>{props.message}</div>);
}

function Unified() {
    const [counter, setCounter] = useState(55);
    const incrementCounter = () => setCounter(counter * 2);
    return (<div>
        <Button onClickFunction={incrementCounter}/>
        <Display message={counter}/>
    </div>);
}

function increment() {
    console.log("CLicked!");
}

export default App;
