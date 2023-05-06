import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import myPicTransparent from "./my pic transparent bg.png";
import resumePDF from "./Alexus Lim Resume.pdf";

function HomePage() {

  return (
    
    <div id = "mainSection" className = "mainPage">
      <Header />
    <div className = "bioContainer">
        <h1>
            Hello! I'm Alexus!
        </h1>
        <article>
            I'm pursuing a Bachelor of Engineering in Computer Science at Nanyang Technological University Singapore. <br/>
            I am deeply interested in how computer programs work. My interest started from a young age, when I wondered how simple inputs on my mouse and keyboard were able to translate to actions in video games. I watched a few introductory coding tutorials on YouTube and decided that this was something I wanted to pursue. <br/>            
            I don't have any work experience relevant to this field yet but I am keen to do internships, learn more and improve myself! <br/>
           
            <p>
            <b>Languages</b>: English, Chinese, Malay <br/>
            <b>Programming Languages</b>: Java, Python, C, SQL <br/>
            <b>Web Development</b>: HTML, CSS, Javascript <br/>
            <b>Other Skills</b>: GitHub, Zoom, Jira, Microsoft Teams <br/>
            </p>
        </article>
        <a href = {resumePDF} target = "_blank">Resume (Last Updated 05/05/2023)</a>
    </div>
    <div className = "pictureContainer">
        <img src = {myPicTransparent} className = "myPic" alt = "Picture of my face"/> 
    </div>
</div>
  );
}

export default HomePage;
