import React from "react";

const Joke = (props) => {
    return (
        <div className={(props.hour >= 6 && props.hour < 22) ?"joke" : "joke2"}>
            <p>{props.joke}</p>
        </div>
    );
};

export default Joke;