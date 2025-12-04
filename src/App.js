import './App.css'; 
import Navbar from './components/navbar';
import Profile from './components/body/profile'; 
import About from './components/body/about'; 
import Skills from './components/body/skills';
import Project from './components/body/project';
import Contact from './components/body/contact';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;