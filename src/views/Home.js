import React, { useEffect } from "react";
import Toronto from "../asset/Toronto.png";
import Graduate from "../asset/graduate.png";
import Code from "../asset/code.png";
import HTML from "../asset/html.png";
import CSS from "../asset/css.png";
import JS from "../asset/js.png";
import ReactIcon from "../asset/react.png";
import Node from "../asset/node.png";
import Mongodb from "../asset/mongodb.png";
import Angular from "../asset/angular.png";
import Github from "../asset/github.png";
import Photoshop from "../asset/photoshop.png";
import Illustrator from "../asset/illustrator.png";
import NET from "../asset/net.png";
import CSharp from "../asset/C#.png";
import MySQL from "../asset/MySQL.png";
import PHP from "../asset/PHP.png";
import WordPress from "../asset/WordPress.png";
import MSSQL from "../asset/MSSQL.png";
import Linux from "../asset/Linux.png";
import Communication from "../asset/communication.jpg";
import ProblemSolving from "../asset/problem-solving.jpg";
import TimeManagement from "../asset/time-management.jpg";
import Creativity from "../asset/creativity.jpg";
import CriticalThinking from "../asset/critical-thinking.jpg";
import MotivatedToLearn from "../asset/motivated-to-learn.jpg";
import Teamwork from "../asset/teamwork.jpg";
import HeroVideo from "../asset/hero-video.mp4";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const technicalSkills = [
    { id: 1, name: "HTML", imagePath: HTML },
    { id: 2, name: "CSS", imagePath: CSS },
    { id: 3, name: "JavaScript", imagePath: JS },
    { id: 4, name: "React", imagePath: ReactIcon },
    { id: 5, name: "Node.js", imagePath: Node },
    { id: 7, name: "MongoDB", imagePath: Mongodb },
    { id: 8, name: "Angular.js", imagePath: Angular },
    { id: 9, name: "GitHub", imagePath: Github },
    { id: 12, name: "Adobe Photoshop", imagePath: Photoshop },
    { id: 13, name: "Adobe Illustrator", imagePath: Illustrator },
    { id: 14, name: "ASP .NET", imagePath: NET },
    { id: 15, name: "C#", imagePath: CSharp },
    { id: 16, name: "My SQL", imagePath: MySQL },
    { id: 17, name: "PHP", imagePath: PHP },
    { id: 18, name: "WordPress", imagePath: WordPress },
    { id: 19, name: "MSSQL", imagePath: MSSQL },
    { id: 20, name: "Linux", imagePath: Linux },
  ];

  const criticalThinking = [
    { id: 1, name: "Critical thinking", importPath: CriticalThinking },
    { id: 2, name: "Problem-solving", importPath: ProblemSolving },
  ];
  const softSkills = [
    { id: 1, name: "Communication", importPath: Communication },
    { id: 2, name: "Time management", importPath: TimeManagement },
    { id: 3, name: "Creativity", importPath: Creativity },
    { id: 4, name: "Motivated to learn", importPath: MotivatedToLearn },
    { id: 5, name: "Teamwork", importPath: Teamwork },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="main relative"
        style={{ position: "relative", height: "75vh", overflow: "hidden" }}
      >
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <div
          className="hero-text"
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            padding: "0 20px",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1 style={{ margin: 0, marginBottom: "250px", }}>Welcome to My Portfolio</h1>
          <p style={{ margin: 0, maxWidth: "600px" }}>
            A results-driven and detail-oriented digital marketing professional with a diploma in Interactive Media Design - Web
            from Georgian College. Specializing in advertising campaign management, data analysis, and optimizing ad performance
            across multiple platforms to drive business growth.
          </p>
          <h2 style={{ margin: 0, marginTop: "70px", maxWidth: "600px" }}>Sayaka Ohara</h2>
        </div>
      </section>

      {/* About Me Section */}
<section className="page-section" id="aboutMe">
  <div className="container">
    <div className="text-center">
      <h1 className="section-heading text-uppercase m-5">About Me</h1>
    </div>
    <div className="row justify-content-center align-items-center mt-4">
      <div className="col-lg-4">
        <div
          className="about text-center d-flex flex-column justify-content-between"
          style={{ minHeight: "370px" }}
        >
          <img
            className="rounded-circle mx-auto"
            src={Graduate}
            width="150"
            height="150"
            alt="graduate"
          />
          <h1 className="text-center">Graduate</h1>
          <p>
            With a degree in Interactive Media Design - Web, Computer Science from Georgian College, I have developed a
            comprehensive understanding of digital marketing, advertising platforms, and campaign analytics. I am passionate
            about applying my skills and actively seeking opportunities in digital marketing and advertising.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="about text-center d-flex flex-column justify-content-between"
          style={{ minHeight: "370px" }}
        >
          <img
            className="rounded-circle mx-auto"
            src={Toronto}
            width="150"
            height="150"
            alt="Toronto"
          />
          <h1 className="text-center">Toronto</h1>
          <p>
            I currently live in Toronto. With a passion for growth, I aim to leverage my skills to contribute to impactful marketing
            campaigns and continue learning in this dynamic industry.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="about text-center d-flex flex-column justify-content-between"
          style={{ minHeight: "370px" }}
        >
          <img
            className="rounded-circle mx-auto"
            src={Code}
            width="150"
            height="150"
            alt="project"
          />
          <h1 className="text-center">Project</h1>
          <p>
            During my studies, I actively learned how to create compelling creatives and build websites from scratch using tools
            like Canva, Figma, Adobe Photoshop, and Adobe Illustrator. I've gained hands-on experience with digital advertising
            platforms like Meta Ads and Google Ads, focusing on crafting data-driven campaigns that increase engagement and
            deliver measurable results.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section className="page-section" id="skills">
        <h1 className="text-center text-uppercase mt-5">Skills</h1>
        <div className="accordion" id="accordionSkills">
          <div className="accordion-item mt-5">
            <h2 className="accordion-header" id="TechnicalSkillsHeader">
              <button
                className="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTechnicalSkills"
                aria-expanded="true"
                aria-controls="collapseTechnicalSkills"
              >
                Technical Skills
              </button>
            </h2>
            <div
              id="collapseTechnicalSkills"
              className="accordion-collapse collapse show"
              aria-labelledby="TechnicalSkillsHeader"
              data-bs-parent="#accordionSkills"
            >
              <div className="accordion-body">
                <div className="row justify-content-center skill-cards">
                  {technicalSkills.map((skill) => (
                    <div className="col-lg-4 mb-2 pt-2" key={skill.name}>
                      <div className="card text-center">
                        <img
                          className="card-img-top mx-auto mt-4"
                          src={skill.imagePath}
                          style={{ width: "80px", height: "80px" }}
                          alt={skill.name}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{skill.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="CriticalThinkingHeader">
              <button
                className="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCriticalThinking"
                aria-expanded="false"
                aria-controls="collapseCriticalThinking"
              >
                <span className="button-text">Critical Thinking Skills</span>
              </button>
            </h2>
            <div
              id="collapseCriticalThinking"
              className="accordion-collapse collapse"
              aria-labelledby="CriticalThinkingHeader"
              data-bs-parent="#accordionSkills"
            >
              <div className="accordion-body">
                <div className="row justify-content-center skill-cards">
                  {criticalThinking.map((skill) => (
                    <div className="col-lg-4 mb-2 pt-2" key={skill.id}>
                      <div className="card text-center">
                        <div
                          className="card-img-top d-flex align-items-end justify-content-center mt-5"
                          style={{ width: "330px", height: "130px" }}
                        >
                          <img
                            className="mx-auto"
                            src={skill.importPath || "placeholder_path"}
                            style={{ height: "140px", width: "auto" }}
                            alt={skill.name}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{skill.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="softSkillsHeader">
              <button
                className="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSoftSkills"
                aria-expanded="false"
                aria-controls="collapseSoftSkills"
              >
                Soft Skills
              </button>
            </h2>
            <div
              id="collapseSoftSkills"
              className="accordion-collapse collapse"
              aria-labelledby="softSkillsHeader"
              data-bs-parent="#accordionSkills"
            >
              <div className="accordion-body">
                <div className="row justify-content-center skill-cards">
                  {softSkills.map((skill) => (
                    <div className="col-lg-4 mb-2 pt-2" key={skill.id}>
                      <div className="card text-center">
                        <div
                          className="card-img-top d-flex align-items-end justify-content-center mt-5"
                          style={{ width: "330px", height: "130px" }}
                        >
                          <img
                            className="mx-auto"
                            src={skill.importPath || "placeholder_path"}
                            style={{ height: "140px", width: "auto" }}
                            alt={skill.name}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{skill.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
