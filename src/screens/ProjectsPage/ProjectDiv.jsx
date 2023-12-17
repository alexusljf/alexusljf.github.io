import React, { useContext } from 'react';
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import "./ProjectsPage.scss";

const ProjectDiv = (props) => {
  const { isNightMode } = useContext(NightModeContext);

  return (
  <div className = {isNightMode === false ? "projectDivDay" : "projectDivNight"}>
  <article>
    <h1 className={isNightMode === false ? "divHeadingDay" : "divHeadingNight"}>
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
      <a href={props.githubLink} target="_blank" className = {isNightMode === false ? "githubButtonDay" : "githubButtonNight"}>
        GitHub Repo
      </a>
    </div>
    <br />
  </article>
  </div>
  );
}

// This Div is for Projects with Website Links
const ProjectDivLink = (props) => {
  const { isNightMode } = useContext(NightModeContext);

  return (
  <div className = {isNightMode === false ? "projectDivDay" : "projectDivNight"}>
  <article>
    <h1 className={isNightMode === false ? "divHeadingDay" : "divHeadingNight"}>
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
      <a href={props.githubLink} target="_blank" className = {isNightMode === false ? "githubButtonDay" : "githubButtonNight"}>
        GitHub Repo
      </a>
      <a href={props.githubPagesLink} target="_blank" className = {isNightMode === false ? "githubButtonDay" : "githubButtonNight"}>
        Website
      </a>
    </div>
    <br />
  </article>
  </div>
  );
}

export {ProjectDiv, ProjectDivLink};
