// returns the play page
import React, { useState } from "react";
import { Card } from "../Buttons/Card";
import "../../assets/styles/App.css";

// returns the play page
export const Playpage = ({ theme }) => {
    // build the buttons
    const buttons = [];
    for (var i = 0; i < 5; i++) {
        // generate random positions
        const pos = {
            position: "absolute",
            left: Math.floor(Math.random() * 96) + "vw",
            top: Math.floor(Math.random() * 92) + "vh",
        };
        buttons.push(<Card key={i + 1} val={i + 1} pos={pos}></Card>);
    }

    // buttons -> cards
    const [cards] = useState(buttons);

    return (
        <>
            <div className="App" id="App">
                <header className="App-header" style={theme}>
                    {cards}
                </header>
            </div>
        </>
    );
};
