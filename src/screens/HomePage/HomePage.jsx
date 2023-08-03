import React, { useContext } from 'react';
import "./HomePage.css";
import myPic from "./photo2.png";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const HomePage = () => {
    const { isNightMode } = useContext(NightModeContext);

  return (
    
    <div id = "mainSection" className = "mainPage">
    <div className = "pictureContainer">
        <img src = {myPic} className={isNightMode === false ? "myPic" : "myPicNight"}/> 
    </div>
    <div className = "bioContainer">
        <h1 className={isNightMode === false ? "heading" : "headingNight"}>
            Hello! I'm Alexus!
        </h1>
        <article>
            I'm pursuing a Bachelor of Engineering in Computer Science at Nanyang Technological University Singapore. <br/> 
            I started using the Family PC from a very young age. I have always been deeply fascinated by how lines of code can translate to amazing video games and websites and wanted to learn how to build programs too.<br/> <br/>           
            No experience in the tech industry yet! Interested in doing internships :)
           
            <p>
            <b>Languages</b>: English, Chinese, Malay <br/>
            <b>Programming Languages</b>: Java, Python, C, SQL, Javascript <br/>
            <b>Web Development</b>: HTML, CSS, ReactJS <br/>
            <b>Other Skills</b>: GitHub, Zoom, Jira, Microsoft Teams <br/>
            </p>
        </article>
        <a href = "https://drive.google.com/file/d/11eAecMcNlTtDCSFM_EbI-UdfTyhxEtgQ/view?usp=sharing" target = "_blank" className={isNightMode === false ? "resumeLink" : "resumeLinkNight"}>My Resume</a>
    </div>
    </div>
  );
}

export default HomePage;
