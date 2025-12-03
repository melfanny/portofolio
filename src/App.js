import './App.css'; // Import CSS global
import Navbar from './components/navbar';
import Profile from './components/body/profile'; 
import About from './components/body/about'; 
import Skills from './components/body/skills';
import Project from './components/body/project';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;