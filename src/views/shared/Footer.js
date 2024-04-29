import React from "react";
import LinkedIn from "../../asset/linkedIn.png";
import Github from "../../asset/github.png";

function Footer() {
  return (
    <div className="col-lg-12 mt-5 pt-2 pb-2" style={{ background: "var(--main-color)" }}>
      <div className="row justify-content-center align-items-center text-center"> 
        <div className="col-lg-12">
          <p className="contact text-white" style={{ paddingLeft: "50px", marginBottom: "5px" }}> 
            Sayaka Ohara
          </p>
          <p className="text-white" style={{ marginBottom: "10px" }}>Email: sayakaohara[AT]outlook[DOT]com</p>
          <ul className="footer-list d-inline-flex align-items-center justify-content-center" style={{ marginBottom: "0" }}> 
            <li className="mr-5">
              <a href="https://www.linkedin.com/in/sayaka-ohara-030441264/">
                <img src={LinkedIn} width="40" height="40" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Sayaka200532267">
                <img src={Github} width="40" height="40" alt="Github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
