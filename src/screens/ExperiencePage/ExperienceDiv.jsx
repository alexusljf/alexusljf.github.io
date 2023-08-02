import React, { useContext } from 'react';
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import "./ExperiencePage.css";

const ExperienceDiv = (props) => {
  const { isNightMode } = useContext(NightModeContext);

  return (
  <div className = {isNightMode === false ? "experienceDiv" : "experienceDivNight"}>
  <figure>
    <img src = {props.img} alt = {props.altText} className = "workLogo"/>
  </figure> 
  <article style={{ textAlign: "left" }}>
    <h1 className={isNightMode === false ? "divHeading" : "divHeadingNight"}>
      {props.role} <br />
      {props.companyName} <br />
      {props.date} <br />
    </h1>
    <ul className='descriptions'>
      <li> {props.description1} </li>
      {props.description2 && <li> {props.description2} </li>}
      {props.description3 && <li> {props.description3} </li>}
    </ul>
  </article>
  <br /> 
  </div>
  );
}

export default ExperienceDiv;
