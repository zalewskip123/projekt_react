import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: purple;
    color: white;
    font-style: oblique;
    display: flex;
    margin: auto;
`;

const Button2 = styled.button`
    background-color: rgb(47, 5, 87);
    color: rgb(172, 168, 168);
    font-style: oblique;
    display: flex;
    margin: auto;
`;

const Guzik = (props) => {

    return (
        <div>
            {(props.hour >= 6 && props.hour < 22) ?
            <Button onClick={props.generatorJoke} >New Joke</Button>
            :
            <Button2 onClick={props.generatorJoke} >New Joke</Button2>
            }
        </div>
    );
};

export default Guzik; 