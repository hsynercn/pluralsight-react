import React, {useState} from "react"

function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (<button onClick={handleClick}>
        +{props.increment}
    </button>);
}


function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function CounterApp() {
    const [counter, setCounter] = useState(0);
    const handleClick = (incrementValue) => setCounter(counter + incrementValue);
    return (
        <>
            <Button onClickFunction={handleClick} increment={1}/>
            <Button onClickFunction={handleClick} increment={10}/>
            <Button onClickFunction={handleClick} increment={50}/>
            <Button onClickFunction={handleClick} increment={100}/>
            <Display message={counter}/>
        </>
    );
}

export default CounterApp;