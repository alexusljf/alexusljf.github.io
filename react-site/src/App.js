import './App.css';
import Header from "./components/Header/Header";
import HomePage from './screens/HomePage/HomePage';
import ExperiencePage from './screens/ExperiencePage/ExperiencePage';
import ProjectsPage from './screens/ProjectsPage/ProjectsPage';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage />
      <ProjectsPage />
      <ExperiencePage />
      <Footer />
    </div>
  );
}

export default App;
