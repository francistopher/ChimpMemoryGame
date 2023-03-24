import React from "react";

// returns card
export const Card = ({ val, pos, onClick }) => {
    return (
        <button className="Card-Button" id={val} style={pos} onClick={onClick}>
            <p>{val}</p>
        </button>
    );
};
