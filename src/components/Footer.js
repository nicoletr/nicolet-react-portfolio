import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;
const mail = <FontAwesomeIcon icon={faAt} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const resume = <FontAwesomeIcon icon={faUserCircle} />;

function Footer() {
  return (
    <footer>
      <div id="footer-contact">
        <ul id="footer-section">
          <a
            className="fab fa-github"
            href="https://github.com/nicoletr"
            target="_blank"
            rel="noreferrer"
          >
            {github}
          </a>
          <li className="footer-text invisible">github</li>
        </ul>
        <ul id="footer-section">
          <a
            className="fas fa-at"
            href="mailto: nicole.trpevski@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {mail}
          </a>
          <li className="footer-text invisible">email</li>
        </ul>
        <ul id="footer-section">
          <a
            className="fab fa-linkedin-in"
            href="https://www.linkedin.com/in/nicole-trpevski-7271b4120/"
            target="_blank"
            rel="noreferrer"
          >
            {linkedin}
          </a>
          <li className="footer-text invisible">linked in</li>
        </ul>
        <ul id="footer-section">
          <a
            className="fas fa-user-circle"
            href="./assets/Nicole-Trpevski-WD-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {resume}
          </a>
          <li className="footer-text invisible">resume</li>
        </ul>
      </div>
      <div>
        <ul id="footer-end">
          <li>
            <a href="mailto: nicole.trpevski@gmail.com">
              nicole.trpevski@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/nicoletr">@nicoletr</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
