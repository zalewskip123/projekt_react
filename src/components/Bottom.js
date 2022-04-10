import React from "react";

const Bottom = (props) => {
    return (
        <div className={(props.hour >= 6 && props.hour < 22) ?"bottom" : "bottom2"}>
            Autorzy: Mikołaj Studencki, Piotr Zalewski
        </div>
    );
};

export default Bottom;