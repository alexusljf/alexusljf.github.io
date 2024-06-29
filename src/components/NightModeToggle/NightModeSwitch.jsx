import React, { useContext } from "react";
import { NightModeContext } from "./NightModeContext";
import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./switch.scss";

const NightModeSwitch = () => {
  const { isNightMode, toggleNightMode } = useContext(NightModeContext);

  return (
    <div className="switch">
      <FontAwesomeIcon
        icon={faSun}
        className={
          isNightMode ? "NightSwitchFaiconNight" : "NightSwitchFaiconDay"
        }
      />
      <ReactSwitch onChange={toggleNightMode} checked={isNightMode} />
      <FontAwesomeIcon
        icon={faMoon}
        className={
          isNightMode ? "NightSwitchFaiconNight" : "NightSwitchFaiconDay"
        }
      />
    </div>
  );
};

export default NightModeSwitch;
