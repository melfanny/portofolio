import './skills.css';

// Data dipisah di luar komponen
const SKILLS_DATA = [
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Red Hat', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: 'GNS3', icon: 'https://raw.githubusercontent.com/brentstewart/GNS3Symbols/master/gns3.png' },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="main-title">Skills</h2>
        
        <div className="skills-grid">
          {SKILLS_DATA.map((skill) => (
            <div 
              key={skill.name} 
              className="skill-item" 
              // Atribut ini dibaca oleh CSS content: attr(data-tooltip)
              data-tooltip={skill.name} 
            >
              <img 
                src={skill.icon} 
                alt={`${skill.name} logo`} 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;