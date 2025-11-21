import "./about.css";
import { FaLaptopCode, FaBrain, FaCamera, FaLanguage, FaCode, FaGamepad, FaImage } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">

      {/* Judul utama untuk bagian About */}
      <h1 className="about-title">ABOUT</h1>

      <div className="about-container">
        
        {/* Foto profil di bagian About */}
        <div className="about-photo">
          <img src="/img/profileweb.jpeg" alt="Profile" />
        </div>

        {/* Isi deskripsi singkat tentang diri */}
        <div className="about-content">
          <p className="about-text">
            Saya adalah mahasiswa semester 5 Teknik Informatika di Universitas Tarumanagara. 
            Saya memiliki minat besar dalam eksplorasi teknologi baru, 
            terutama pada pengembangan perangkat lunak dan pengolahan data. 
            Saya senang mempelajari cara membangun sistem yang efisien dan fungsional serta memahami 
            bagaimana teknologi dapat digunakan untuk menyelesaikan berbagai tantangan di dunia nyata. 
          </p>

          {/* Tombol untuk mengunduh CV */}
          <button className="cv-btn" onClick={() => alert('Download CV started!')}>
            Curriculum Vitae Saya
          </button>
        </div>
      </div>

      {/* Subjudul untuk bagian Interests */}
      <h2 className="about-subtitle">INTERESTS</h2>

      <div className="interest-grid">
        <div className="interest-box"><FaLaptopCode /> Software Development</div>
        <div className="interest-box"><FaBrain /> Machine Learning</div>
        <div className="interest-box"><FaCamera /> Computer Vision</div>
        <div className="interest-box"><FaLanguage /> Natural Language Processing</div>
        <div className="interest-box"><FaCode /> Software Engineering</div>
        <div className="interest-box"><FaGamepad /> Game Development</div>
        <div className="interest-box"><FaImage /> Image Processing</div>
      </div>

    </div>
  );
}

export default About;