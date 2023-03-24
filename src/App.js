import React, { useState } from "react";
import "./assets/styles/App.css";
import { lightTheme, darkTheme } from "./assets/styles/Themes";
import { Homepage } from "./components/Pages/Home";
import { Playpage } from "./components/Pages/Play";
import ThemeButton from "./components/Buttons/ThemeButton";

const App = () => {
    // set the theme
    const [theme, setTheme] = useState(lightTheme);

    const themeToggler = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };
    // set the page
    const [page, setPage] = useState("home");
    const play = () => {
        setPage("play");
    };
    const home = () => {
        setPage("home");
    };

    switch (page) {
        case "play":
            return (
                <>
                    <Playpage theme={theme} homeToggler={home}></Playpage>
                    <ThemeButton onClick={themeToggler}></ThemeButton>
                </>
            );
        default:
            return (
                <>
                    <Homepage
                        theme={theme}
                        themeToggler={themeToggler}
                        pageToggler={play}
                    ></Homepage>
                    <ThemeButton onClick={themeToggler}></ThemeButton>
                </>
            );
    }
};

export default App;
