import React, { useState, useContext } from 'react';
import "./ExperiencePage.css";
import sinopecLogo from "./sinopec logo.png"
import spfLogo from "./Singapore_Police_Force_crest.png"
import ExperienceDiv from "./ExperienceDiv";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const ExperiencePage = () => {
  const { isNightMode } = useContext(NightModeContext);
  return (
    
  <div id="experienceSection" className="experiencePage">
    <header>
      <h1 className={isNightMode === false ? "heading" : "headingNight"}>Experience</h1>
      <h2 className = "headerText">
        No experience in the tech industry yet! Looking for internships :)
      </h2>
    </header>
    <div className="experienceContainer">
      <ExperienceDiv
        img = {sinopecLogo}
        altText = "Sinopec Logo"
        role = "Part-time Customer Service Staff"
        companyName = "Sinopec Lubricant (Singapore) Pte. Ltd"
        date = "Mar 2021 - April 2021"
        description1 = "Managed customers and answered queries, also guided traffic."
        description2 = "Helped to refine the interpersonal skills gained from national service."
      />
      <ExperienceDiv
        img = {spfLogo}
        altText = "SPF Logo"
        role = "Patrol Officer, Public Transport Security Command"
        companyName = "Singapore Police Force"
        date = "Feb 2019 - Feb 2021"
        description1 = "Patrolled MRT Stations and Bus Interchanges around Singapore, leading groups of 4"
        description2 = "Conducted security checks on suspicious persons and interacted with community members, helping those in need. Picked up valuable interpersonal skills through these experiences better stress management."
        description3 = "Mentored incoming juniors and guided in performing day-to-day tasks. Learned how to collaborate with different learning styles and personalities."
      />    
    </div>
  </div>

  );
}

export default ExperiencePage;
