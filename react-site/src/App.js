import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './screens/HomePage/HomePage';
import ExperiencePage from './screens/ExperiencePage/ExperiencePage';
import ProjectsPage from './screens/ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
