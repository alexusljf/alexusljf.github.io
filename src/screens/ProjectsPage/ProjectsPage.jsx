import React, { useContext } from "react";
import "./ProjectsPage.scss";
import { ProjectDiv } from "./ProjectDiv";
import { NightModeContext } from "../../components/NightModeToggle/NightModeContext";
import {
  personalProjects,
  academicProjects,
  hackathonProjects,
} from "../../data/projects";

const ProjectsPage = () => {
  const { isNightMode } = useContext(NightModeContext);

  return (
    <div id="projectSection" className="projectPage">
      <header>
        <h1 className={isNightMode ? "headingNight" : "headingDay"}>
          Personal Projects
        </h1>
        <br></br>
      </header>
      <div className="projectContainer">
        {personalProjects.map((project, index) => (
          <ProjectDiv
            key={index}
            modName={project.modName}
            projectName={project.projectName}
            description1={project.description1}
            description2={project.description2}
            description3={project.description3}
            toolsUsed={project.toolsUsed}
            githubLink={project.githubLink}
            website={project.website}
          />
        ))}
      </div>
      <header>
        <h1 className={isNightMode ? "headingNight" : "headingDay"}>
          Academic Projects
        </h1>
      </header>
      <div className="projectContainer">
        {academicProjects.map((project, index) => (
          <ProjectDiv
            key={index}
            modName={project.modName}
            projectName={project.projectName}
            description1={project.description1}
            description2={project.description2}
            description3={project.description3}
            toolsUsed={project.toolsUsed}
            githubLink={project.githubLink}
            website={project.website}
          />
        ))}
      </div>
      <header>
        <h1 className={isNightMode ? "headingNight" : "headingDay"}>
          Hackathons
        </h1>
      </header>
      <br></br>
      <div className="projectContainer">
        {hackathonProjects.map((project, index) => (
          <ProjectDiv
            key={index}
            modName={project.modName}
            projectName={project.projectName}
            description1={project.description1}
            description2={project.description2}
            description3={project.description3}
            toolsUsed={project.toolsUsed}
            githubLink={project.githubLink}
            website={project.website}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
