// NightModeSwitch.js
import "./switch.css";
import React, { useContext } from 'react';
import { NightModeContext } from './NightModeContext';
import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const NightModeSwitch = () => {
  const { isNightMode, toggleNightMode } = useContext(NightModeContext);

  return (
    <div className="switch">      
      <FontAwesomeIcon icon={faSun} className = {isNightMode === false ? "faicon" : "faiconNight"}/>
      <ReactSwitch onChange={toggleNightMode} checked={isNightMode} />
      <FontAwesomeIcon icon={faMoon} className = {isNightMode === false ? "faicon" : "faiconNight"}/>
    </div>
  );
};

export default NightModeSwitch;
