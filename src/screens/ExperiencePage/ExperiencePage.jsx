import React, { useContext } from 'react';
import "./ExperiencePage.css";
import sinopecLogo from "./Logos/sinopec logo.png";
import spfLogo from "./Logos/Singapore_Police_Force_crest.png";
import NIELogo from "./Logos/NIE_Logo.png";
import shopeeLogo from "./Logos/Shopee_logo.svg.png";
import govTechLogo from "./Logos/govtech_logo.png";
import ExperienceDiv from "./ExperienceDiv";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';

const ExperiencePage = () => {
  const { isNightMode } = useContext(NightModeContext);
  return (
    
  <div id="experienceSection" className="experiencePage">
    <header>
      <h1 className={isNightMode === false ? "heading" : "headingNight"}>Experience</h1>
    </header>
    <div className="experienceContainer">
    <ExperienceDiv
        img = {govTechLogo}
        altText = "GovTech Logo"
        role = "Product Manager Intern : GCSOC Project Coordinator"
        companyName = "GovTech"
        date = "Dec 2023 - May 2024"
        description1 = "I will be doing an internship as a Project Coordinator Intern at GovTech's Government Cyber Security Operations Centre (GCSOC) from 11th Dec 2023 - 31st May 2024!"
        description2 = ""
      />      
      <ExperienceDiv
        img = {NIELogo}
        altText = "NIE Logo"
        role = "Part-time Student Assistant"
        companyName = "National Institute of Education, Singapore"
        date = "May 2023 - Present"
        description1 = "Under NTU's Work-Study Scheme. This role at the NIE Library involves Office Administration and Information Management duties."
        description2 = "Assisted in hosting events at the library and also scanning and archiving of old books."
      />
      <ExperienceDiv
        img = {shopeeLogo}
        altText = "Shopee Logo"
        role = "Part-time Warehouse Assistant"
        companyName = "Shopee"
        date = "May 2022 - Jul 2022"
        description1 = "My job scope was to pick, sort, label and pack online orders."
        description2 = "Worked together with teams of 10 daily and also trained newcomers."
        description3 = "I also did the loading and unloading of pallets with electric ride-on Jungheinrich pallet jacks"
      />      
      <ExperienceDiv
        img = {sinopecLogo}
        altText = "Sinopec Logo"
        role = "Part-time Customer Service Staff"
        companyName = "Sinopec Lubricant (Singapore) Pte. Ltd"
        date = "Mar 2021 - April 2021"
        description1 = "Managed customers and answered queries, also guided traffic."
        description2 = "Helped to refine the interpersonal skills gained from National Service."
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
