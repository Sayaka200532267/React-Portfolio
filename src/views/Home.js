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

function Home() {
    useEffect(() => {
        document.title = 'Home';
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
            <section className="main">
                <h1>Welcome to My Portfolio</h1>
            </section>

            <section className="page-section" id="aboutMe">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase m-5">About Me</h2>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4">
                            <div className="about text-center">
                                <img className="mx-auto rounded-circle" src={Graduate} width="200" height="200" alt="graduate" />
                                <h1 className="text-center m-1">Graduate</h1>
                                <p>I am a recent graduate of Georgian College, Barrie, ON. My program was Interactive Media Design - Web, where I studied Web Development, Programming, and Web Design, including UX/UI.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about text-center">
                                <img className="rounded-circle" src={Toronto} width="200" height="200" alt="Toronto" />
                                <h1 className="text-center m-2">Toronto</h1>
                                <p>I am currently seeking opportunities in Toronto, as I live there. I am also open to remote positions in the field of Web Development. I am eager to apply my skills and continue learning and growing in this dynamic industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about text-center">
                                <img className="mx-auto rounded-circle" src={Code} width="200" height="200" alt="code" />
                                <h1 className="m-2">Web Development</h1>
                                <p>Throughout my journey, I have developed proficiency in technologies such as HTML, CSS, JavaScript, React, Node.js and more. I am passionate about creating user-friendly and visually appealing web experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center m-5">
                            <p className="contact"><strong>Feel free to reach out to me at sayakaohara[AT]outlook[DOT]com. I look forward to connecting with you!</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section" id="skills">
                <h1>Skills</h1>
                <p>Throughout my study, I acquired many web development and web design skills.</p>

                <section className="page-section" id="hardSkills">
                    <h2>Hard Skills</h2>
                    <div className="card-columns">
                        {hardSkills.map((skill) => (
                            <div className="card" key={skill.name}>
                                <img className="card-img-top" src={skill.imagePath}style={{ width: "100px", height: "auto" }} alt={skill.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{skill.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="page-section" id="softSkills">
                    <h2>Soft Skills</h2>
                    <ul className="list-group">
                        {softSkills.map((softSkill) => (
                            <li className="list-group-item" key={softSkill.id}>
                                {softSkill.name}
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </div>
    );
}

export default Home;