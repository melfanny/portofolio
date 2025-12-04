import "./about.css";
import { FaLaptopCode, FaBrain, FaCamera, FaLanguage, FaCode, FaGamepad, FaImage, FaNetworkWired } from "react-icons/fa";

const About = () => {
  const handleDownloadCV = () => {
    // Membuat elemen anchor sementara untuk download
    const link = document.createElement('a');
    link.href = '/CV_Melfanny.pdf';
    link.download = 'CV_Melfanny.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about" id="about">

      {/* Judul utama untuk bagian About */}
      <h1 className="about-title">ABOUT ME</h1>

      <div className="about-container">
        
        {/* Foto profil di bagian About */}
        <div className="about-photo">
          <img src="/img/fotoaboutme.jpeg" alt="Profile" />
        </div>

        {/* Isi deskripsi singkat tentang diri */}
        <div className="about-content">
          <p className="about-text">
            Saya adalah seorang mahasiswa Teknik Informatika di Universitas Tarumanagara 
            dengan ketertarikan pada dunia pemrograman dan pengembangan teknologi. Saya menikmati
            proses mempelajari konsep baru serta membangun solusi yang dapat digunakan untuk 
            menyelesaikan permasalahan nyata. Dengan fokus pada pengembangan diri dan eksplorasi teknologi,
            saya terus berusaha meningkatkan kemampuan saya dalam setiap proyek yang saya kerjakan. 
          </p>

          {/* Tombol untuk mengunduh CV */}
          <button className="cv-btn" onClick={handleDownloadCV}>
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
        <div className="interest-box"><FaNetworkWired /> Networking</div>
      </div>

    </section>
  );
}

export default About;