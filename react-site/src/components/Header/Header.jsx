import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

function Header(){
    return(
        <>
        <div className="topBar">
            <div className='leftSection'>
                <a href='/'>
                <button className='homeButton'>
                    Home
                </button>
            </a>
            </div>
        <div className="middleSection">
                <a href='/projects'>
                    <button className='middleButton'>
                        Projects
                    </button>
                </a>
                <a href='/experience'>
                    <button className='middleButton'>
                        Experience
                    </button>
                </a>
        </div>
            <div className="rightSection">
                <a href="https://www.linkedin.com/in/alexuslim/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className = 'faicon'/>
                </a>
                <a href="https://github.com/alexusljf" target="_blank">
                <FontAwesomeIcon icon={faSquareGithub} className = 'faicon'/>
                </a>
                <a href="mailto:alexusljf@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className = 'faicon'/>
                </a>
            </div>
        </div>
        
        </>
    )
}
export default Header;