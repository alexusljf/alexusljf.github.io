import React, { useContext } from "react";
import { NightModeContext } from "../../components/NightModeToggle/NightModeContext";
import "./ProjectsPage.scss";

const ProjectDiv = (props) => {
  const { isNightMode } = useContext(NightModeContext);

  return (
    <div className={isNightMode ? "projectDivNight" : "projectDivDay"}>
      <article>
        <h1 className={isNightMode ? "divHeadingNight" : "divHeadingDay"}>
          {props.modName && (
            <>
              {props.modName} <br />
            </>
          )}
          {props.projectName} <br />
        </h1>
        <ul className="descriptions">
          <li> {props.description1} </li>
          {props.description2 && <li> {props.description2} </li>}
          {props.description3 && <li> {props.description3} </li>}
          <li> {props.toolsUsed} </li>
        </ul>
        <div className="buttonDivLinks">
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className={isNightMode ? "githubButtonNight" : "githubButtonDay"}
          >
            GitHub Repo
          </a>
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              rel="noreferrer"
              className={isNightMode ? "githubButtonNight" : "githubButtonDay"}
            >
              Website
            </a>
          )}
        </div>
        <br />
      </article>
    </div>
  );
};

export { ProjectDiv };
