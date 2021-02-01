import React, {useState} from "react"

function Button(props) {

    return (<button onClick={props.onClickFunction}>
        +1
    </button>);
}


function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function CounterApp() {
    const [counter, setCounter] = useState(0);
    const handleClick = () => setCounter(counter + 1);
    return (
        <>
            <Button onClickFunction={handleClick}/>
            <Display message={counter}/>
        </>
    );
}

export default CounterApp;