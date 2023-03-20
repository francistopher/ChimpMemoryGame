import "../../assets/styles/App.css";
import logo from "../../assets/images/chimp.png";
import React from "react";

// return intro monkey button
const IntroButton = ({ pageToggler }) => {
    return (
        <>
            <button className="Intro-Button" onClick={pageToggler}>
                <img src={logo} className="App-logo" alt="logo" />
            </button>
            <p>Chimp Memory Game!</p>
        </>
    );
};

export default IntroButton;
