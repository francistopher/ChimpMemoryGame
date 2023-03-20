import "../../assets/styles/App.css";
import logo from "../../assets/images/chimp.png";
import React from "react";

const IntroButton = ({ pageToggler }) => {
    return (
        <>
            <button className="Intro-Button" onClick={pageToggler}>
                <img src={logo} className="App-logo" alt="logo" />

                <p>Chimp Memory Game!</p>
            </button>
        </>
    );
};

export default IntroButton;
