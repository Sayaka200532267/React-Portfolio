import React, { useEffect } from "react";
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

function Skills() {
    useEffect(() => {
        document.title = 'Skills';
    }, []);
    const hardSkills = [
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
    
    const softSkills = [
        { id: 1, name: "Communication" },
        { id: 2, name: "Teamwork" },
        { id: 3, name: "Problem-solving" },
        { id: 4, name: "Time management" },
        { id: 5, name: "Adaptability" },
        { id: 6, name: "Creativity" },
        { id: 7, name: "Attention to detail" },
        { id: 8, name: "Critical thinking" },
        { id: 9, name: "Motivated to learn" },
    ];
    
    return (
        <div>
    <section className="page-section" id="skills">
        <h1>Skills</h1>
        <div className="accordion" id="accordionSkills">
            <div className="accordion-item">
                <h2 className="accordion-header" id="hardSkillsHeader">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHardSkills" aria-expanded="false" aria-controls="collapseHardSkills">
                        Hard Skills
                    </button>
                </h2>
                <div id="collapseHardSkills" className="accordion-collapse collapse" aria-labelledby="hardSkillsHeader" data-bs-parent="#accordionSkills">
                    <div className="accordion-body">
                        <div className="card-columns">
                            {hardSkills.map((skill) => (
                                <div className="card" key={skill.name}>
                                    <img className="card-img-top" src={skill.imagePath} style={{ width: "100px", height: "auto" }} alt={skill.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{skill.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="softSkillsHeader">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSoftSkills" aria-expanded="false" aria-controls="collapseSoftSkills">
                        Soft Skills
                    </button>
                </h2>
                <div id="collapseSoftSkills" className="accordion-collapse collapse" aria-labelledby="softSkillsHeader" data-bs-parent="#accordionSkills">
                    <div className="accordion-body">
                        <ul className="list-group">
                            {softSkills.map((softSkill) => (
                                <li className="list-group-item" key={softSkill.id}>
                                    {softSkill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

    );
}

export default Skills;