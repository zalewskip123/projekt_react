import React, {useState} from "react";
import axios from "axios";

const App = () => {
    const [joke, setJoke] = useState('');

    const generatorJoke = () => {
        axios.get('https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,political&type=single')
            .then((joke) => {
                setJoke(joke.data.joke);
            })
    }

    return (
        <div>
            <p>{joke}</p>
            <button onClick={generatorJoke}>Nowy żart</button>
        </div>
    )
}

export default App;