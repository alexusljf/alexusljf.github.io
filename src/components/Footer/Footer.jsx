import React, {useContext} from "react";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import './Footer.css';

const Footer = () =>{
    const { isNightMode } = useContext(NightModeContext);
    return(
        <footer className = {isNightMode === false ? "footer" : "footerNight"}>
            <p> Thanks for checking out my website! 
                 I'll be adding on more features as I learn more about web dev :) </p>
        </footer>
    )
}
export default Footer;