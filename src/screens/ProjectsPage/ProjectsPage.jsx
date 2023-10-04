import React, { useContext } from 'react';
import "./ProjectsPage.css";
import {ProjectDiv, ProjectDivLink} from "./ProjectDiv";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const ProjectsPage = () => {
    const { isNightMode } = useContext(NightModeContext);

  return (
    <div id="projectSection"  className = "projectPage">
    <header>
      <h1 className={isNightMode === false ? "heading" : "headingNight"}> Personal Projects </h1> <br></br>
      <div className="projectContainer">
        <ProjectDivLink
          modName = "API Practice Project"
          projectName = "Hangman Game"
          description1 = "Developed a Hangman Game in React, hosted on GitHub Pages."
          description2 = "Uses a random word API to fetch random words that will be used for the game, enhancing replayability."
          description3 = "Planning to add more features like difficulty options"
          toolsUsed = "Tools used: ReactJS, CSS, Random Word API"
          githubLink = "https://github.com/alexusljf/Hangman"
          githubPagesLink = "https://alexusljf.github.io/Hangman/"
        />
        <ProjectDivLink
          modName = "API Practice Project"
          projectName = "Should I Run?"
          description1 = "Engineered a web app in React using OpenWeather’s Weather API to fetch real-time weather conditions for any city, hosted on GitHub Pages."
          description2 = "Users can easily input a city's name and receive personalized run recommendations based on real-time weather conditions. "
          description3 = "Learnt how to use APIs and utilise the retrieved data. I run often and I use this app everyday. I find it very useful!"
          toolsUsed = "Tools used: ReactJS, Sass, OpenWeather’s Weather API"
          githubLink = "https://github.com/alexusljf/Should-I-Run"
          githubPagesLink = "https://alexusljf.github.io/Should-I-Run/"
        />  
     </div>
      
      <h1 className={isNightMode === false ? "heading" : "headingNight"}> Academic Projects </h1>
    </header>
    <div className="projectContainer">
    <ProjectDiv
        modName = "Software Engineering Project"
        projectName = "REvaluate"
        description1 = "We developed a website where users can view and compare housing prices in Singapore; in a group of 6."
        description2 = "I mainly worked on the Frontend and formulated website’s functionality utilising various diagrams, such as Use-Case diagrams, Sequence Diagrams and State Diagrams."        
        description3 = "We collaborated on Jira using Agile methodology practices. Brainstormed and pitched ideas for features to expand utility and functionality."
        toolsUsed = "Tools used: ReactJS, CSS, Jira"
        githubLink = "https://github.com/RishJohn14/HousingInfo"
      />
    <ProjectDiv
        modName = "Object-Oriented Programming Project"
        projectName = "Movie Booking and Listing Management Application (MOBLIMA)"
        description1 = "We developed a cinema management system where users can book tickets and staff can update the cinema database; in a group of 5."
        description2 = "I mainly organised application documentation, created essential entity classes and rewrote code to be more readable "        
        description3 = "Applied SOLID design principles and Object-Oriented Programming concepts to design an application with high cohesion and low coupling."
        toolsUsed = "Language used: Java"
        githubLink = "https://github.com/alexusljf/SC2002-MOBLIMA"
      />
    <ProjectDiv
        modName = "Introduction to Data Science &amp; AI Project"
        projectName = "COE Trading Bot"
        description1 = "Performed data exploration on COE and GDP trend datasets; in a group of 3."
        description2 = "We implemented a Linear Regression model and ran a trading simulation, which the model successfully made a profit."   
        description3 = "I was involved with Data Preparation, Data Cleaning, Data Visualization, Machine Learning and maintaining the Github Repo." 
        toolsUsed = "Tools used: Python, Numpy, Matplotlib, Pandas, Jupyter Notebook"
        githubLink = "https://github.com/alexusljf/SC1015-mini_project"
      />      
    </div>
    <h1 className={isNightMode === false ? "heading" : "headingNight"}> Hackathons </h1> <br></br>
      <div className="projectContainer">
        <ProjectDivLink
          modName = "PSA Code Sprint 2023"
          projectName = "AI Resource Allocation Manager"
          description1 = "•	Developed a front-end mock-up for an AI resource manager designed for PSA’s ports."
          description2 = "Utilised React & CSS for development and hosted on GitHub Pages. React, hosted on GitHub Pages."
          description3 = "Gained valuable experience in brainstorming and development within a short timeframe. Also introduced me to the world of hackathons, with this as my first participation."
          toolsUsed = "Tools used: ReactJS, CSS"
          githubLink = "https://github.com/alexusljf/PSA-Code-Sprint-2023"
          githubPagesLink = "https://alexusljf.github.io/PSA-Code-Sprint-2023/"
        />
        
     </div>
  </div>
  

  );
}

export default ProjectsPage;
