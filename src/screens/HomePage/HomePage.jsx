import React, { useContext } from "react";
import "./HomePage.scss";
import myPic from "./me.png";
import { NightModeContext } from "../../components/NightModeToggle/NightModeContext";

const HomePage = () => {
  const { isNightMode } = useContext(NightModeContext);

  return (
    <div id="mainSection" className="mainPage">
      <div className={isNightMode ? "bioContainerNight" : "bioContainerDay"}>
        <div className="pictureContainer">
          <img
            src={myPic}
            className={isNightMode ? "myPicNight" : "myPicDay"}
            alt="pic of myself"
          />
        </div>
        <h1 className={isNightMode ? "headingNight" : "headingDay"}>
          Hello! I'm Alexus!
        </h1>
        <article>
          Welcome to my website! This is where I document my projects and
          experiences 🙂 <br />
          I'm currently a Computer Science Penultimate @ NTU and am interning at
          GovTech as a Software Engineer Intern <br />
          Eager to contribute to a dynamic team and gain hands-on experience to
          enhance my expertise and skillsets. <br />
          Strong project management and resourceful problem-solving skills.{" "}
          <br />
          Proactive self-starter, actively engaged in side-projects to learn and
          refine new skills. <br />
          Effective multitasker, adept at adapting to changing priorities.{" "}
          <br />
          <p>
            <b>Languages</b>: English, Chinese, Japanese, Malay <br />
            <b>Programming Languages</b>: Java, Python, C, SQL, Javascript{" "}
            <br />
            <b>Web Development</b>: HTML, CSS, ReactJS, Sass, NextJS <br />
            <b>Database</b>: Microsoft SQL Server, PostgreSQL, MongoDB <br />
            <b>Other Skills</b>: Microsoft Office Suite, GitHub, Jira, Time
            Management, Product Management Skills <br />
          </p>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
