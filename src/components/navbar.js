import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  // Menyimpan menu mana yang sedang aktif
  const [activeTab, setActiveTab] = useState('Home');

  // Daftar menu yang akan ditampilkan pada navbar
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="navbar">
      <div className="logo">
        ML.
      </div>

      {/* List navigasi dari array menuItems */}
      <ul className="nav-links">
        {menuItems.map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              className={`nav-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;