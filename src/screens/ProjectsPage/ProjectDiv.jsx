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
    <ul className='descriptions'>
      <li> {props.description1} </li>
      <li> {props.description2} </li>
      <li> {props.description3} </li>
      <li> {props.toolsUsed} </li>
    </ul>
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

const ProjectDivLink = (props) => {
  const { isNightMode } = useContext(NightModeContext);

  return (
  <div className = {isNightMode === false ? "projectDiv" : "projectDivNight"}>
  <article>
    <h1 className={isNightMode === false ? "divHeading" : "divHeadingNight"}>
      {props.modName} <br />
      {props.projectName} <br />
    </h1>
    <ul className='descriptions'>
      <li> {props.description1} </li>
      {props.description2 && <li> {props.description2} </li>}
      {props.description3 && <li> {props.description3} </li>}
      <li> {props.toolsUsed} </li>
    </ul>
    <div className = 'buttonDivLinks'>
      <a href={props.githubLink} target="_blank" className = {isNightMode === false ? "githubButton" : "githubButtonNight"}>
        GitHub Repo
      </a>
      <a href={props.githubPagesLink} target="_blank" className = {isNightMode === false ? "githubButton" : "githubButtonNight"}>
        Website
      </a>
    </div>
    <br />
  </article>
  </div>
  );
}

export {ProjectDiv, ProjectDivLink};
