import React from "react";
import "./ExperiencePage.css";

function ExperienceDiv(props) {

  return (
  <div className="experienceDiv">
  <figure>
    <img src = {props.img} alt = {props.altText} className = "workLogo"/>
  </figure> 
  <article style={{ textAlign: "left" }}>
    <h1 style={{ textAlign: "center" , borderBottom: "solid 1px #000"}}>
      {props.role} <br />
      {props.companyName} <br />
      {props.date} <br />
    </h1>
    {props.description1} <br />
    {props.description2} <br />
    {props.description3} <br />
  </article>
  <br /> 
  </div>
  );
}

export default ExperienceDiv;
