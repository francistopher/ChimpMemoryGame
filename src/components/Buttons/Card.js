import React from "react";

// returns card
export const Card = ({ val, pos }) => {
    return (
        <button className="Card-Button" id={val} style={pos}>
            <p>{val}</p>
        </button>
    );
};
