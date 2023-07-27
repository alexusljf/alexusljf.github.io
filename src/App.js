import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header/Header";
import HomePage from './screens/HomePage/HomePage';
import ExperiencePage from './screens/ExperiencePage/ExperiencePage';
import ProjectsPage from './screens/ProjectsPage/ProjectsPage';
import Footer from "./components/Footer/Footer";
import { NightModeContext } from './components/NightModeToggle/NightModeContext';

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
    <div className={isNightMode === false ? "App" : "AppNight"}>
      <Header/>
      <HomePage/>
      <ProjectsPage/>
      <ExperiencePage/>
      <Footer/>
    </div>
    </NightModeContext.Provider>
  );
}

export default App;
