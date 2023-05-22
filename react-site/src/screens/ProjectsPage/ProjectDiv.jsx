import React, { useContext } from 'react';
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import "./ProjectsPage.css";

const ProjectDiv = (props) => {
  const { isNightMode } = useContext(NightModeContext);

  return (
  <div className = {isNightMode === false ? "projectDiv" : "projectDivNight"}>
  <article>
    <h1 className={isNightMode === false ? "divHeading" : "divHeadingNight"}>
      {props.modName} <br />
      {props.projectName} <br />
    </h1>
    {props.description1} <br />
    {props.description2} <br />
    {props.description3} <br />
    {props.toolsUsed} <br />
    <br />
    <div className = 'buttonDiv'>
      <a href={props.githubLink} target="_blank" className = {isNightMode === false ? "githubButton" : "githubButtonNight"}>
        GitHub Repo
      </a>
    </div>
    <br />
  </article>
  </div>
  );
}

export default ProjectDiv;
