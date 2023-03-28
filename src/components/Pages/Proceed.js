import React from "react";
import IntroButton from "../Buttons/IntroButton";

const param = {
    fontSize: "1.75vh",
};

// returns the homepage
export const ProceedPage = ({ theme, pageToggler, nextLevel }) => (
    <div className="App" id="App">
        <header className="App-header" style={theme}>
            <IntroButton pageToggler={pageToggler}></IntroButton>
            <span style={param}>
                <p>Level {nextLevel} coming up!</p>
            </span>
        </header>
    </div>
);
