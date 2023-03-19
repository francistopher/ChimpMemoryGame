import React from "react";
import ThemeButton from "../../components/Buttons/ThemeButton";
import IntroLabel from "../Labels/IntroLabel";

// returns the homepage
export const Homepage = (theme, themeToggler, pageToggler) => (
    <div className="App" id="App">
        <header className="App-header" style={theme}>
            <IntroLabel></IntroLabel>
            <ThemeButton onClick={themeToggler}></ThemeButton>
        </header>
    </div>
);
