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
function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    // Technical skills and soft skills data
    const technicalSkills = [
        { id: 1, name: "HTML", imagePath: HTML},
        { id: 2, name: "CSS", imagePath: CSS},
        { id: 3, name: "JavaScript", imagePath: JS},
        { id: 4, name: "React", imagePath: ReactIcon},
        { id: 5, name: "Node.js", imagePath: Node},
        { id: 7, name: "MongoDB", imagePath: Mongodb},
        { id: 8, name: "Angular.js", imagePath: Angular}, 
        { id: 9, name: "GitHub", imagePath: Github},
        { id: 12, name: "Adobe Photoshop", imagePath: Photoshop},
        { id: 13, name: "Adobe Illustrator", imagePath: Illustrator},
        { id: 14, name: "ASP .NET", imagePath: NET},
        { id: 15, name: "C#", imagePath: CSharp},
        { id: 16, name: "My SQL", imagePath: MySQL},
        { id: 17, name: "PHP", imagePath: PHP},
        { id: 18, name: "WordPress", imagePath: WordPress},
        { id: 19, name: "MSSQL", imagePath: MSSQL},
        { id: 20, name: "Linux", imagePath: Linux} 
    ];
    
    const criticalThinking = [
        { id: 1, name: "Critical thinking", importPath: CriticalThinking},
        { id: 2, name: "Problem-solving", importPath: ProblemSolving},
    ] 
    const softSkills = [
        { id: 1, name: "Communication", importPath: Communication },
        { id: 2, name: "Time management", importPath: TimeManagement},
        { id: 3, name: "Creativity", importPath: Creativity},
        { id: 4, name: "Motivated to learn", importPath: MotivatedToLearn},
        { id: 5, name: "Teamwork", importPath: Teamwork},
    ];
    

    return (
        <div>
{/* home section */}
<section className="main">
<section className="main relative">
  <div className="hero-image">
  <h1>Welcome to My Portfolio</h1>
 
  <p>A responsible, well-organized professional with a diploma in Interactive Media Design - Web from Georgian College. Specializing in both web development and web design brings a comprehensive skill set in creating and managing dynamic web applications.</p>
 <h2>Sayaka Ohara</h2>
  </div>
</section>
</section>
{/* about me section */}
            <section className="page-section" id="aboutMe">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-heading text-uppercase m-5">About Me</h1>
                    </div>
                    <div className="row justify-content-center align-items-center mt-4">
                        <div className="col-lg-4">
                            <div className="about text-center">
                                <img className="rounded-circle" src={Graduate} width="150" height="150" alt="graduate" />
                                <h1 className="text-center">Graduate</h1>
                                <p>With a degree in Interactive Media Design - Web, Computer Science, I possess a comprehensive understanding of web development, programming, and UX/UI design principles.  Enthusiastic about applying my skills, I'm actively seeking opportunities in web development for a fulfilling career.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about text-center">
                                <img className="rounded-circle" src={Toronto} width="150" height="150" alt="Toronto" />
                                <h1 className="text-center">Toronto</h1>
                                <p>I'm actively seeking web development opportunities, locally and remotely. Although the closest city is Toronto, I am open to relocating anywhere in GTA. With a passion for growth, I aim to leverage my skills to contribute to impactful projects, driving success and continual learning in this dynamic industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about text-center">
                                <img className="rounded-circle" src={Code} width="150" height="150" alt="code" />
                                <h1 className="text-center">Project</h1>
                                <p>Throughout my studies, I've mastered HTML, CSS, JavaScript, React, Node.js, and more. With a passion for user-friendly web experiences, I've led projects boosting user engagement. Now, I'm ready to apply my skills in web development, aiming for continued success and growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* skills section */}
            <section className="page-section" id="skills">
  <h1 className="text-center text-uppercase mt-5">Skills</h1>
  <div className="accordion" id="accordionSkills">
    <div className="accordion-item mt-5">
      <h2 className="accordion-header" id="TechnicalSkillsHeader">
        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTechnicalSkills" aria-expanded="true" aria-controls="collapseTechnicalSkills" >
          Technical Skills
        </button>
      </h2>
      <div id="collapseTechnicalSkills" className="accordion-collapse collapse show" aria-labelledby="TechnicalSkillsHeader" data-bs-parent="#accordionSkills">
        <div className="accordion-body">
          <div className="row justify-content-center skill-cards">
            {technicalSkills.map((skill, index) => (
              <div className="col-lg-4 mb-2 pt-2" key={skill.name}>
                <div className="card text-center">
                  <img className="card-img-top mx-auto mt-4" src={skill.imagePath} style={{ width: "80px", height: "80px" }} alt={skill.name} />
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
        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCriticalThinking" aria-expanded="false" aria-controls="collapseCriticalThinking">
        <span className="button-text">Critical Thinking Skills</span>
        </button>
      </h2>
      <div id="collapseCriticalThinking" className="accordion-collapse collapse" aria-labelledby="CriticalThinkingHeader" data-bs-parent="#accordionSkills">
        <div className="accordion-body">
          <div className="row justify-content-center skill-cards">
            {criticalThinking.map((criticalThinking) => (
              <div className="col-lg-4 mb-2 pt-2" key={criticalThinking.id}>
                <div className="card text-center">
                  <div className="card-img-top d-flex align-items-end justify-content-center mt-5" style={{ width: "330px", height: "130px" }}>
                    <img className="mx-auto" src={criticalThinking.importPath || "placeholder_path"} style={{ height: "140px", width: "auto" }} alt={criticalThinking.name} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{criticalThinking.name}</h5>
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
        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSoftSkills" aria-expanded="false" aria-controls="collapseSoftSkills">
          Soft Skills
        </button>
      </h2>
      <div id="collapseSoftSkills" className="accordion-collapse collapse" aria-labelledby="softSkillsHeader" data-bs-parent="#accordionSkills">
        <div className="accordion-body">
          <div className="row justify-content-center skill-cards">
            {softSkills.map((softSkill) => (
              <div className="col-lg-4 mb-2 pt-2" key={softSkill.id}>
                <div className="card text-center">
                  <div className="card-img-top d-flex align-items-end justify-content-center mt-5" style={{ width: "330px", height: "130px" }}>
                    <img className="mx-auto" src={softSkill.importPath || "placeholder_path"} style={{ height: "140px", width: "auto" }} alt={softSkill.name} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{softSkill.name}</h5>
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
    };

export default Home;
