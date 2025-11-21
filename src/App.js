import './App.css'; // Import CSS global
import Navbar from './components/navbar';
import Profile from './components/body/profile'; 
import About from './components/body/about'; 


function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
    </div>
  );
}

export default App;