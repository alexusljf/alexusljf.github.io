import React from "react";
import "./ExperiencePage.css";
import Header from "../../components/Header/Header";
import sinopecLogo from "./sinopec logo.png"
import spfLogo from "./Singapore_Police_Force_crest.png"

function ExperiencePage() {

  return (
    
    <div id="experienceSection" className="experiencePage">
        <Header/>
  <header>
    <h1 style={{ textAlign: "center" }}>Experience</h1>
    <h2 style={{ textAlign: "center", marginBottom: 30 }}>
      No experience in the tech industry yet! Looking for internships :)
    </h2>
  </header>
  <div className="experienceContainer">
    <div className="experienceDiv">
      <figure>
        <img
          src= {sinopecLogo}
          alt="Sinopec Logo"
          className="workLogo"
        />
      </figure>
      <article style={{ textAlign: "center" }}>
        <h1>
          Part-time Customer Service Staff <br />
          Sinopec Lubricant (Singapore) Pte. Ltd <br />
          Mar 2021 - April 2021
        </h1>
        Attended to customers and guided traffic. This role helped me to improve
        and work on the interpersonal skills I gained from my national service.
        <br />
        <br />
      </article>
    </div>
    <div className="experienceDiv">
      <figure>
        <img
          src= {spfLogo}
          alt="SPF Logo"
          className="workLogo"
        />
      </figure>
      <article style={{ textAlign: "center" }}>
        <h1>
          Patrol Officer, Public Transport Security Command <br />
          Singapore Police Force <br />
          Feb 2019 - Feb 2021
        </h1>
        Patrolled MRT Stations and Bus Interchanges around Singapore. Conducted
        security checks on suspicious persons and interacted with the community,
        helping those in need. <br />
        Picked up valuable interpersonal skills through these experiences and
        became a more confident and outspoken individual. Mentored incoming
        juniors and guided them in performing day-to-day tasks. <br />
        Learned how to collaborate with different learning styles and
        personalities.
        <br />
      </article>
    </div>
  </div>
</div>

  );
}

export default ExperiencePage;
