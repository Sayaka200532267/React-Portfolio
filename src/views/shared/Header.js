import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import Logo from "../../asset/logo.png";

// add function Header() {
function Header() {
  const scrollToAboutMe = (e) => {
    e.preventDefault();
    const aboutMeSection = document.getElementById("aboutMe");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

// add function scrollToSkills(e) {
  const scrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-brand mt-2">
      <img className="logo" src={Logo} height="80px" width="auto" alt="Logo" />

      </div>

      <div className="ml-auto ml-10">
        <ul className="navbar-nav">
          <li className="nav">
          <Link
  to="/aboutMe"
  className="nav-link"
style={{
  fontSize: "20px",
  color: "#f30c79",
}}
  onClick={scrollToAboutMe}
>
  <strong>About Me</strong>
</Link>
          </li>
          <li className="nav">
            <Link to="/skills" className="nav-link"   style={{
     fontSize: "20px",
       color: "#f30c79",
  }} onClick={scrollToSkills}>
             <strong>Skills</strong> 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
