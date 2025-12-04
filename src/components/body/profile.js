import "./profile.css";
import Wave from "../animation/wave";
import { FaGithub, FaLinkedin, } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="profile" id="home">

      {/* Bagian kiri berisi social media links */}
      <div className="profile-left">
        <a href="https://www.linkedin.com/in/melfanny-leono/">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/melfanny">
          <FaGithub className="icon" />
        </a>
      </div>

      {/* Area tengah berisi nama, sapaan, jurusan dan tombol */}
      <div className="profile-center">
        <p className="hello">
          Hello, I'm <span className="wave-inline"><Wave /></span>
        </p>
        <h1 className="name">Melfanny Leono</h1>
        <p className="education">Informatics Engineering Student at Tarumanagara University</p>

        <button 
          className="talk-btn"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Let's Talk
        </button>
      </div>

      {/* Bagian kanan berisi teks scroll down */}
      <div className="profile-right">
        <p className="scroll-down">Scroll Down</p>
      </div>
    </section>
  );
}

export default Profile;