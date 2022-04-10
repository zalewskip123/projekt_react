import React from 'react';

const Toggle = ({ isOn, Toggle, hour }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={Toggle}
        className={(hour >= 6 && hour < 22) ?"react-toggle-checkbox" : "react-toggle-checkbox2"}
        id={`react-toggle-new`}
        type="checkbox"
      />
      <label
        className={(hour >= 6 && hour < 22) ?"react-toggle-label" : "react-toggle-label2"}
        htmlFor={`react-toggle-new`}
      >
        <span className={(hour >= 6 && hour < 22) ?(`react-toggle-button`) : (`react-toggle-button2`)}/>
      </label>
    </>
  );
};

export default Toggle;