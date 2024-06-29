import React, { useContext } from "react";
import { useMediaQuery } from "@mui/material";
import { NightModeContext } from "../../components/NightModeToggle/NightModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NightModeSwitch from "../NightModeToggle/NightModeSwitch";
import MenuDrawer from "./MenuDrawer";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./Header.scss";

const Header = () => {
  const { isNightMode } = useContext(NightModeContext);
  const isMobile = useMediaQuery("(max-width: 430px)");
  console.log(isMobile);

  return (
    <>
      <div className={isNightMode ? "topBarNight" : "topBarDay"}>
        <div className="leftSection">
          <NightModeSwitch className="switch" />
        </div>
        {!isMobile && (
          <div className="middleSection">
            <a href="#mainSection" style={{ textDecoration: "none" }}>
              <button
                className={
                  isNightMode ? "middleButtonNight" : "middleButtonDay"
                }
              >
                <PersonIcon />
                About Me
              </button>
            </a>
            <a href="#projectSection" style={{ textDecoration: "none" }}>
              <button
                className={
                  isNightMode ? "middleButtonNight" : "middleButtonDay"
                }
              >
                <ComputerIcon />
                Projects
              </button>
            </a>
            <a href="#experienceSection" style={{ textDecoration: "none" }}>
              <button
                className={
                  isNightMode ? "middleButtonNight" : "middleButtonDay"
                }
              >
                <WorkIcon />
                Experience
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/11eAecMcNlTtDCSFM_EbI-UdfTyhxEtgQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                className={
                  isNightMode ? "middleButtonNight" : "middleButtonDay"
                }
              >
                <AssignmentIcon />
                Resume
              </button>
            </a>
          </div>
        )}
        <div className="rightSection">
          <a
            href="https://www.linkedin.com/in/alexuslim/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={isNightMode ? "faiconNight" : "faiconDay"}
            />
          </a>
          <a
            href="https://github.com/alexusljf"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className={isNightMode ? "faiconNight" : "faiconDay"}
            />
          </a>
          <a href="mailto:alexusljf@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={isNightMode ? "faiconNight" : "faiconDay"}
            />
          </a>
          {isMobile && <MenuDrawer />}
        </div>
      </div>
    </>
  );
};
export default Header;
