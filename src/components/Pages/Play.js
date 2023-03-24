// returns the play page
import React, { useState, useEffect } from "react";
import { Card } from "../Buttons/Card";
import "../../assets/styles/App.css";

// build the positions before the play page is rendered
var positions = [];

// update the positions
const setPositions = () => {
    positions = [];
    for (var count = 0; count < 5; count++) {
        const pos = {
            position: "absolute",
            left: Math.floor(Math.random() * 96) + "vw",
            top: Math.floor(Math.random() * 92) + "vh",
        };
        positions.push(pos);
    }
};
setPositions();
// start tracker before play page is rendered
var tracker = 0;
// returns the play page
export const Playpage = ({ theme, homeToggler }) => {
    // keeps track of selected buttons
    const [selectedCards, setSelectedCards] = useState([]);
    const [showText, setShowText] = useState(true);

    const handleCardClick = (cardIndex) => {
        setSelectedCards((prevSelectedCards) =>
            // is button index already within previously selected buttons?
            prevSelectedCards.includes(cardIndex)
                ? // if it is, remove it
                  prevSelectedCards.filter((index) => index !== cardIndex)
                : // if not, add it
                  [...prevSelectedCards, cardIndex]
        );
        // tracks the order of the buttons selected
        if (cardIndex === tracker) {
            // allow the user to continue
            tracker += 1;
        } else {
            // user went out of order/restart
            tracker = 0;
            setPositions();
            homeToggler();
        }
    };

    // hide card numbers after one second
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowText(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    // render cards
    return (
        <div className="App" id="App">
            <header className="App-header" style={theme}>
                {positions.map((position, index) => {
                    // if card withindex/position is selected
                    if (selectedCards.includes(index)) {
                        // don't display
                        return null;
                    }
                    // otherwise display card
                    return (
                        <Card
                            key={index}
                            val={showText ? index + 1 : ""}
                            pos={position}
                            onClick={() => handleCardClick(index)}
                        ></Card>
                    );
                })}
            </header>
        </div>
    );
};
