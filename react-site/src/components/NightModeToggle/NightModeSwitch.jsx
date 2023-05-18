// NightModeSwitch.js
import "./switch.css";
import React, { useContext } from 'react';
import { NightModeContext } from './NightModeContext';
import ReactSwitch from "react-switch";

const NightModeSwitch = () => {
  const { isNightMode, toggleNightMode } = useContext(NightModeContext);

  return (
    <div className="switch">
      <label className={isNightMode === false ? "label" : "labelNight"}> {isNightMode === true ? "Dark Mode" : "Light Mode"} </label>
      <ReactSwitch onChange={toggleNightMode} checked={isNightMode} />
    </div>
  );
};

export default NightModeSwitch;
