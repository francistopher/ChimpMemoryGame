import React from "react";

import IntroButton from "../Buttons/IntroButton";

// returns the homepage
export const Homepage = ({ theme, pageToggler }) => (
    <div className="App" id="App">
        <header className="App-header" style={theme}>
            <IntroButton pageToggler={pageToggler}></IntroButton>
        </header>
    </div>
);
