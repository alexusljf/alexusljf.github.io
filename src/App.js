import React, { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./screens/HomePage/HomePage";
import ExperiencePage from "./screens/ExperiencePage/ExperiencePage";
import ProjectsPage from "./screens/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import { NightModeContext } from "./components/NightModeToggle/NightModeContext";
import "./App.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
        <div className={isNightMode ? "AppNight" : "AppDay"}>
          <Header />
          <HomePage />
          <ProjectsPage />
          <ExperiencePage />
          <Footer />
        </div>
      </NightModeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
