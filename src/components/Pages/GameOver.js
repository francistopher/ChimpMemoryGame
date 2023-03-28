import React from "react";
import skull from "../../assets/images/skull.png";
const param = {
    fontSize: "1.5vh",
};
export const GameOver = ({ theme }) => (
    <>
        <div className="App" id="App">
            <header className="App-header" style={theme}>
                <img src={skull} className="App-logo" alt="logo"></img>
                <p>Game Over!</p>
                <span style={param}>
                    <p>Refresh Page to Start All Over!</p>
                </span>
            </header>
        </div>
    </>
);
