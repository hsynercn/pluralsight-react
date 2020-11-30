import React from "react";
import App from "./App";

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }
}

class Container extends React.Component {
    render() {
        return(<div><Card /></div>);
    }
}

export default Container;