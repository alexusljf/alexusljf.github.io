import React, {useContext} from "react";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import NightModeSwitch from '../NightModeToggle/NightModeSwitch'
import './Header.scss';

const Header = () => {
    const { isNightMode } = useContext(NightModeContext);

    return(
        <>
        <div className = {isNightMode === false ? "topBarDay" : "topBarNight"}>
            <div className='leftSection'>
                <NightModeSwitch className = "switch"/>
            </div>
            <div className="middleSection">
                <a href = "#mainSection">
                    <button className = {isNightMode === false ? "middleButtonDay" : "middleButtonNight"}>
                        About Me
                    </button>
                </a>
                <a href = "#projectSection">
                    <button className = {isNightMode === false ? "middleButtonDay" : "middleButtonNight"}>
                        Projects
                    </button>
                </a>
                <a href = "#experienceSection">
                    <button className = {isNightMode === false ? "middleButtonDay" : "middleButtonNight"}>
                        Experience
                    </button>
                </a>
            </div>
            <div className="rightSection">
                <a href="https://www.linkedin.com/in/alexuslim/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className = {isNightMode === false ? "faiconDay" : "faiconNight"}/>
                </a>
                <a href="https://github.com/alexusljf" target="_blank">
                <FontAwesomeIcon icon={faSquareGithub} className = {isNightMode === false ? "faiconDay" : "faiconNight"}/>
                </a>
                <a href="mailto:alexusljf@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className = {isNightMode === false ? "faiconDay" : "faiconNight"}/>
                </a>
            </div>
        </div>
        </>
    )
}
export default Header;