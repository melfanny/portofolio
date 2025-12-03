import { useState, useMemo, useRef, useEffect } from "react";
import "./project.css";
//data proyek
import { PROJECT_DATA, CATEGORY_NAMES } from "../dataproject/dataproject";

//hook untuk slideshow gambar
const useSlideshow = (imageSource) => {
  const images = useMemo(
    () => (Array.isArray(imageSource) ? imageSource : [imageSource]),
    [imageSource]
  );
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return { currentImage: images[index], start, stop };
};

//Komponen tombol filter

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    className={`filter-btn ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const ProjectCard = ({ data }) => {
  const { currentImage, start, stop } = useSlideshow(data.image);

  return (
    <div className="project-card" onMouseEnter={start} onMouseLeave={stop}>
      <img
        src={currentImage}
        alt={data.title}
        className="project-img"
        loading="lazy"
      />
      <div className="card-content">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>

        <div className="tech-list">
          {data.tech.map((tech, idx) => (
            <img
              key={idx}
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className="tech-icon"
            />
          ))}
        </div>

        <a
          href={data.link}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.type === "apk" ? "Download APK" : "View Repository"}
        </a>
      </div>
    </div>
  );
};

//KOMPONEN UTAMA

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("webdev");

  // Mendapatkan kategori unik dari data secara otomatis
  const categories = useMemo(() => {
    const allCats = PROJECT_DATA.map((p) => p.category || "other");
    return [...new Set(allCats)];
  }, []);

  // Filter data
  const filteredProjects = useMemo(() => {
    return PROJECT_DATA.filter(
      (p) => (p.category || "other") === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="project-container">
      <h1 className="project-title">My Projects</h1>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            label={CATEGORY_NAMES[cat] || cat}
            isActive={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>

      <div className="project-section">
        <h2 className="section-title">
          {CATEGORY_NAMES[activeCategory] || activeCategory}
        </h2>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}