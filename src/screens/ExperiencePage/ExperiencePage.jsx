import React, { useContext } from "react";
import "./ExperiencePage.scss";
import ExperienceDiv from "./ExperienceDiv";
import { NightModeContext } from "../../components/NightModeToggle/NightModeContext";
import {
  internships,
  partTimeJobs,
  nationalService,
} from "../../data/experience";

const ExperiencePage = () => {
  const { isNightMode } = useContext(NightModeContext);

  return (
    <div id="experienceSection" className="experiencePage">
      <header>
        <h1 className={isNightMode ? "headingNight" : "headingDay"}>
          Internships
        </h1>
      </header>
      <div className="experienceContainer">
        {internships.map((internship, index) => (
          <ExperienceDiv
            key={index}
            img={internship.img}
            altText={internship.altText}
            role={internship.role}
            companyName={internship.companyName}
            date={internship.date}
            description1={internship.description1}
            description2={internship.description2}
            description3={internship.description3}
          />
        ))}
      </div>
      <header>
        <h1 className={isNightMode ? "headingNight" : "headingDay"}>
          Part-Time Jobs
        </h1>
      </header>
      <div className="experienceContainer">
        {partTimeJobs.map((partTimeJob, index) => (
          <ExperienceDiv
            key={index}
            img={partTimeJob.img}
            altText={partTimeJob.altText}
            role={partTimeJob.role}
            companyName={partTimeJob.companyName}
            date={partTimeJob.date}
            description1={partTimeJob.description1}
            description2={partTimeJob.description2}
            description3={partTimeJob.description3}
          />
        ))}
      </div>
      <header>
        <h1 className={isNightMode ? "headingNight" : "headingDay"}>
          National Service
        </h1>
      </header>
      <div className="experienceContainer">
        <ExperienceDiv
          img={nationalService.img}
          altText={nationalService.altText}
          role={nationalService.role}
          companyName={nationalService.companyName}
          date={nationalService.date}
          description1={nationalService.description1}
          description2={nationalService.description2}
          description3={nationalService.description3}
        />
      </div>
    </div>
  );
};

export default ExperiencePage;
