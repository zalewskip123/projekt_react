import React, {useState, useEffect} from "react";
import classes from "./Style.css"
import classes2 from "./StyleNoc.css"
import Tytul from "./Tytul";
import Guzik from "./Guzik";
import Joke from "./Joke";
import Toggle from "./Toggle";
import Bottom from "./Bottom";

const JOKEAPI1 = "https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single";
const JOKEAPI2 = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky?blacklistFlags=racist,sexist&type=single";


const App = () => {
    const [joke, SetJoke] = useState('');
    const [value, setToggle] = useState(false);
    const [hour, setHour] = useState((new Date()).getHours());

    const generatorJoke = () => {
        const JOKEAPI = value ? JOKEAPI2 : JOKEAPI1;
        fetch(JOKEAPI)
            .then(res => res.json())
            .then(data => SetJoke(data.joke));
    }

    useEffect(() => {
        generatorJoke();
    }, [])

    useEffect(() => {
        document.body.style.backgroundColor = (hour >= 6 && hour < 22) ? "white" : "#292525";
    }, [hour])

    return (
        <div className={(hour >= 6 && hour < 22) ?"body" : "body2"}>
            <Tytul hour={hour}/>
            <div>
                <Joke joke={joke} hour={hour} />
                <Guzik generatorJoke={generatorJoke} hour={hour}/>
            </div>
            <div className={(hour >= 6 && hour < 22) ?"toggleDiv" : "toggleDiv2"}>
                <p className= {(hour >= 6 && hour < 22) ?(value ?"safeStylOff" : "safeStylOn") :(value ?"safeStylOff2" : "safeStylOn2")}>Safe</p>
                <Toggle
                isOn={value}
                Toggle={() => setToggle(!value)} 
                hour = {hour}
                />
                <p className={(hour >= 6 && hour < 22) ?(value ?"notSafeStylOn" : "notSafeStylOff") :(value ?"notSafeStylOn2" : "notSafeStylOff2")}>Not Safe</p>
            </div>
            <Bottom hour={hour}/>
        </div>
    )
}

export default App;