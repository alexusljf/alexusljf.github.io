import React from "react";
import "./ProjectsPage.css";

function ProjectDiv(props) {

  return (
  <div className="projectDiv">
  <article>
    <h1 style={{ textAlign: "center" , borderBottom: "solid 1px #000"}}>
      {props.modName} <br />
      {props.projectName} <br />
    </h1>
    {props.description1} <br />
    {props.description2} <br />
    {props.description3} <br />
    {props.toolsUsed} <br />
    <br />
    <div className = 'buttonDiv'>
      <a href={props.githubLink} target="_blank" className = "githubButton">
        GitHub Repo
      </a>
    </div>
    <br />
  </article>
  </div>
  );
}

export default ProjectDiv;
