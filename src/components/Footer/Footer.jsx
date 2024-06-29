import React, { useContext } from "react";
import { NightModeContext } from "../../components/NightModeToggle/NightModeContext";
import "./Footer.scss";

const Footer = () => {
  const { isNightMode } = useContext(NightModeContext);
  return (
    <footer className={isNightMode ? "footerNight" : "footerDay"}>
      <p>
        Alexus Lim © 2024 All Rights Reserved <br />
        Thanks for checking out my website!
      </p>
    </footer>
  );
};
export default Footer;
