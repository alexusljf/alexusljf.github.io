import React from "react";
import "./ProjectsPage.css";
import Header from "../../components/Header/Header";

function ProjectsPage() {

  return (
    
    <div id="projectSection" className="projectPage">
        <Header/>
    <header>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
    </header>
    <div className="projectContainer">
      <div className="projectDiv">
        <article>
          <h1 style={{ textAlign: "center" }}>
            Object-Oriented Programming Project <br />
            Movie Booking and Listing Management Application (MOBLIMA) <br />
          </h1>
          Developed a cinema management system where users can book tickets and
          staff can update the cinema database; in a group of 5. <br />
          Applied SOLID design principles and Object-Oriented Programming concepts
          to design an application with high cohesion and low coupling. <br />
          Language used: Java <br />
          <br />
          <a
            href="https://www.youtube.com/watch?v=M5aEbe4fcL8&t=513s"
            target="_blank"
          >
            Video Presentation of the project on YouTube{" "}
          </a>{" "}
          <br />
          <a href="https://github.com/alexusljf/SC2002-MOBLIMA" target="_blank">
            {" "}
            GitHub Repo{" "}
          </a>{" "}
          <br />
          <br />
        </article>
      </div>
      <div className="projectDiv">
        <article>
          <h1 style={{ textAlign: "center" }}>
            Introduction to Data Science &amp; AI Project <br />
            COE Trading Bot <br />
          </h1>
          Performed data exploration on COE and GDP trend datasets; in a group of
          3. <br />
          Implemented a Linear Regression model and ran a trading simulation,
          which the model successfully made a profit. <br />
          Tools used: Python, Numpy, Matplotlib, Pandas, Jupyter Notebook <br />
          <br />
          <a
            href="https://github.com/alexusljf/SC1015-mini_project"
            target="_blank"
          >
            {" "}
            GitHub Repo{" "}
          </a>{" "}
          <br />
          <br />
        </article>
      </div>
    </div>
  </div>
  

  );
}

export default ProjectsPage;
