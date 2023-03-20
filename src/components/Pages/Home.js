import React from "react";

import IntroButton from "../Labels/IntroLabel";

// returns the homepage
export const Homepage = ({ theme, pageToggler }) => (
    <div className="App" id="App">
        <header className="App-header" style={theme}>
            <IntroButton pageToggler={pageToggler}></IntroButton>
        </header>
    </div>
);
