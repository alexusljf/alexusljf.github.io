import React, { useContext } from 'react';
import "./HomePage.css";
import myPic from "./photo2.png";
import NightModeSwitch from '../../components/NightModeToggle/NightModeSwitch';
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const HomePage = () => {
    const { isNightMode } = useContext(NightModeContext);

  return (
    
    <div id = "mainSection" className = "mainPage">
    <div className = "pictureContainer">
        <img src = {myPic} className={isNightMode === false ? "myPic" : "myPicNight"}/> 
        <NightModeSwitch/>
    </div>
    <div className = "bioContainer">
        <h1 className={isNightMode === false ? "heading" : "headingNight"}>
            Hello! I'm Alexus!
        </h1>
        <article>
            I'm pursuing a Bachelor of Engineering in Computer Science at Nanyang Technological University Singapore. <br/>
            I am deeply interested in how computer programs work. My interest started from a young age, when I wondered how simple inputs on my mouse and keyboard were able to translate to actions in video games. I watched a few introductory coding tutorials on YouTube and decided that this was something I wanted to pursue. <br/>            
            I don't have any work experience relevant to this field yet but I am keen to do internships, learn more and improve myself! <br/>
           
            <p>
            <b>Languages</b>: English, Chinese, Malay <br/>
            <b>Programming Languages</b>: Java, Python, C, SQL <br/>
            <b>Web Development</b>: HTML, CSS, Javascript, ReactJS <br/>
            <b>Other Skills</b>: GitHub, Zoom, Jira, Microsoft Teams <br/>
            </p>
        </article>
        <a href = "https://drive.google.com/file/d/11eAecMcNlTtDCSFM_EbI-UdfTyhxEtgQ/view?usp=sharing" target = "_blank" className={isNightMode === false ? "resumeLink" : "resumeLinkNight"}>Resume</a>
    </div>
    </div>
  );
}

export default HomePage;
