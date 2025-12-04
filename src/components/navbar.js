import { useState, useEffect, useMemo } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Menggunakan useMemo untuk membungkus menuItems
  const menuItems = useMemo(() => [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
  ], []); 

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbarEl = document.querySelector('.navbar');
      if (navbarEl) {
        const height = navbarEl.offsetHeight;
        setNavbarHeight(height);
        document.body.style.paddingTop = `${height}px`;
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);  

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarHeight) return;

      const offset = navbarHeight + 20; // sedikit jarak di bawah navbar
      let current = 'Home';

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            current = item.label;
          }
        }
      });

      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Panggil langsung untuk mendapatkan posisi awal scroll

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight, menuItems]); 

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const section = document.getElementById(item.id);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });

      setActiveTab(item.label);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">ML.</div>

      {/* List navigasi dari array menuItems */}
      <ul className="nav-links">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={`#${item.id}`}
              className={`nav-item ${
                activeTab === item.label ? 'active' : ''
              }`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
