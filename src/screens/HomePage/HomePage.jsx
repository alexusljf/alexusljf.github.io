import React, { useContext, useEffect } from 'react';
import "./HomePage.scss";
import myPic from "./me.png";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const HomePage = () => {
  const { isNightMode } = useContext(NightModeContext);

  return (
    <div id = "mainSection" className = "mainPage">
      <div className={isNightMode === false ? "bioContainerDay" : "bioContainerNight"}>
          <div className = "pictureContainer">
              <img src = {myPic} className={isNightMode === false ? "myPicDay" : "myPicNight"}/> 
          </div>
          <h1 className={isNightMode === false ? "headingDay" : "headingNight"}>
          Hello! I'm Alexus!
          </h1>
          <article>
          I'm an ambitious penultimate Computer Science student seeking an immersive Summer Internship. <br/>
          Eager to contribute to a dynamic team and gain hands-on experience to enhance my expertise and skillsets. <br/>
          Strong project management and resourceful problem-solving skills. <br/>
          Proactive self-starter, actively engaged in side-projects to learn and refine new skills. <br/>
          Effective multitasker, adept at adapting to changing priorities. <br/>
          <p>
          <b>Languages</b>: English, Chinese, Japanese, Malay <br/>
          <b>Programming Languages</b>: Java, Python, C, SQL, Javascript <br/>
          <b>Web Development</b>: HTML, CSS, ReactJS, Sass <br/>
          <b>Other Skills</b>: Microsoft Office Suite, GitHub, Jira <br/>
          </p>
          </article>
          <a href = "https://drive.google.com/file/d/11eAecMcNlTtDCSFM_EbI-UdfTyhxEtgQ/view?usp=sharing" target = "_blank">
            <button className={isNightMode === false ? "resumeButtonDay" : "resumeButtonNight"}>
              My Resume
            </button>
          </a>
      </div>
    </div>
  );
}

export default HomePage;
