import "./Home.css";
import Blob from "../../assets/blob.svg";
import HeroImg from "../../assets/hero-img.svg";
import Logo from "../../assets/dc-logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="left-home">
        <div className="logo-container">
          <img src={Logo} alt="logo-img" />
        </div>
        <div className="hero-container">
          <img src={HeroImg} alt="hero-image" />
        </div>
      </section>
      <div className="blob-container">
        <img src={Blob} alt="blob" id="blob-img" />
      </div>
      <section className="right-home">
        <ul className="home-nav oswald">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Register</Link>
          </li>
        </ul>
        <div className="home-text">
          <p className="lato">
            A Project Management tool That Provides{" "}
            <span id="home-highlight">Clear Visualization </span>
            To Keep Everything on Schedule
          </p>
          <button className="home-btn oswald">Join</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
