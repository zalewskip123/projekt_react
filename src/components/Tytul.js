import React from "react";

const Tytul = (props) => {
    return (
        <div className={(props.hour >= 6 && props.hour < 22) ?"tytul" : "tytul2"}>
            <h1>Joke.org</h1>
        </div>
    );
};

export default Tytul;