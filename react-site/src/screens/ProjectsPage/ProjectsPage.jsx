import React, { useContext } from 'react';
import "./ProjectsPage.css";
import Header from "../../components/Header/Header";
import ProjectDiv from "./ProjectDiv";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const ProjectsPage = () => {
    const { isNightMode } = useContext(NightModeContext);

  return (
    <div id="projectSection"  className = "projectPage">
        <Header/>
    <header>
      <h1 className={isNightMode === false ? "heading" : "headingNight"}>Projects</h1>
    </header>
    <div className="projectContainer">
    <ProjectDiv
        modName = "Software Engineering Project"
        projectName = "REvaluate"
        description1 = "Developed a website where users can view and compare housing prices in Singapore; implemented using ReactJS, NodeJS, CSS and MongoDB in a group of 6. Worked on the Frontend."
        description2 = "Formulated website’s functionality utilising various diagrams, such as Use-Case diagrams, Sequence Diagrams and State Diagrams. Designed the User Interface with Figma."        
        description3 = "Engaged in agile project management, collaborated on Jira using agile methodology practices. Brainstormed and generated ideas for project. Pitched ideas for features to expand utility and functionality"
        toolsUsed = "Tools used: ReactJS, CSS"
        githubLink = "https://github.com/RishJohn14/HousingInfo"
      />
    <ProjectDiv
        modName = "Object-Oriented Programming Project"
        projectName = "Movie Booking and Listing Management Application (MOBLIMA)"
        description1 = "Developed a cinema management system where users can book tickets and staff can update the cinema database; in a group of 5."
        description2 = "Organised application documentation, rewriting code to be more readable and creating essential entity classes."        
        description3 = "Applied SOLID design principles and Object-Oriented Programming concepts to design an application with high cohesion and low coupling."
        toolsUsed = "Language used: Java"
        githubLink = "https://github.com/alexusljf/SC2002-MOBLIMA"
      />
    <ProjectDiv
        modName = "Introduction to Data Science &amp; AI Project"
        projectName = "COE Trading Bot"
        description1 = "Performed data exploration on COE and GDP trend datasets; in a group of 3."
        description2 = "Implemented a Linear Regression model and ran a trading simulation, which the model successfully made a profit."
        toolsUsed = "Tools used: Python, Numpy, Matplotlib, Pandas, Jupyter Notebook"
        githubLink = "https://github.com/alexusljf/SC1015-mini_project"
      />      
    </div>
  </div>
  

  );
}

export default ProjectsPage;
