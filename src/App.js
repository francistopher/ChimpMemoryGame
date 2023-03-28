import React, { useState } from "react";
import "./assets/styles/App.css";
import { lightTheme, darkTheme } from "./assets/styles/Themes";
import { Homepage } from "./components/Pages/Home";
import { Playpage } from "./components/Pages/Play";
import ThemeButton from "./components/Buttons/ThemeButton";
import { GameOver } from "./components/Pages/GameOver";
import { ProceedPage } from "./components/Pages/Proceed";

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

    const gameOver = () => {
        setPage("over");
    };

    const proceed = () => {
        setPage("proceed");
    };

    const [cardsCount, setCardsCount] = useState(1);

    const nextLevel = () => {
        setCardsCount(cardsCount + 1);
    };

    switch (page) {
        case "play":
            return (
                <>
                    <Playpage
                        theme={theme}
                        gameOverToggler={gameOver}
                        proceedToggler={proceed}
                        cardsCount={cardsCount}
                        nextLevel={nextLevel}
                    ></Playpage>
                    <ThemeButton onClick={themeToggler}></ThemeButton>
                </>
            );
        case "proceed":
            return (
                <>
                    <ProceedPage
                        theme={theme}
                        pageToggler={play}
                        nextLevel={cardsCount}
                    ></ProceedPage>
                    <ThemeButton onClick={themeToggler}></ThemeButton>
                </>
            );

        case "over":
            return (
                <>
                    <GameOver theme={theme} level={cardsCount}></GameOver>;
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
