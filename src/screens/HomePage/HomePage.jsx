import React, { useContext, useEffect } from 'react';
import "./HomePage.css";
import myPic from "./photo2.png";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const HomePage = () => {
    const { isNightMode } = useContext(NightModeContext);

    useEffect(() => {
      const headingElement = document.querySelector(".heading");
      const headingNightElement = document.querySelector(".headingNight");
  
      if (isNightMode === false) {
        headingElement.style.animation = "typing 3s steps(30) forwards";
      } else {
        headingNightElement.style.animation = "typingNight 3s steps(30) forwards";
      }
    }, [isNightMode]); // Add isNightMode as a dependency to re-run when it changes


  return (
    
    <div id = "mainSection" className = "mainPage">
    <div className = "bioContainer">
        <h1 className={isNightMode === false ? "heading" : "headingNight"}>
            Hello! I'm Alexus!
        </h1>
        <article>
        I'm an ambitious penultimate Computer Science student seeking an immersive internship to apply theoretical knowledge and practical skills in a real-world setting. <br/>
        Eager to contribute to a dynamic team and gain hands-on experience to enhance my expertise and skillsets. <br/>
        Strong project management and resourceful problem-solving skills. <br/>
        Proactive self-starter, actively engaged in side-projects to refine skills. <br/>
        Effective multitasker, adept at adapting to changing priorities. <br/>
        <p>
        <b>Languages</b>: English, Chinese, Malay <br/>
        <b>Programming Languages</b>: Java, Python, C, SQL, Javascript <br/>
        <b>Web Development</b>: HTML, CSS, ReactJS, Sass <br/>
        <b>Other Skills</b>: Microsoft Office Suite, GitHub, Zoom, Microsoft Teams, Jira <br/>
        </p>
        </article>
        <a href = "https://drive.google.com/file/d/11eAecMcNlTtDCSFM_EbI-UdfTyhxEtgQ/view?usp=sharing" target = "_blank" className={isNightMode === false ? "resumeLink" : "resumeLinkNight"}>
          <button className={isNightMode === false ? "resumeButton" : "resumeButtonNight"}>
            My Resume
          </button>
        </a>
    </div>
    <div className = "pictureContainer">
        <img src = {myPic} className={isNightMode === false ? "myPic" : "myPicNight"}/> 
    </div>
    </div>
  );
}


export default HomePage;
