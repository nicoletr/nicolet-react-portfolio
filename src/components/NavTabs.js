import React from "react";
import "../styles/App.css";

const resume =
  "https://drive.google.com/file/d/1wpo6hknFxXFAW80C8WbyidjZjbvd7UEv/view?usp=sharing";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className="navbar-header"
        >
          hi, i'm nicole
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-item active" : "nav-item"
              }
            >
              me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#work"
              onClick={() => handlePageChange("Work")}
              className={
                currentPage === "Work" ? "nav-item active" : "nav-item"
              }
            >
              my work
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-item active" : "nav-item"
              }
            >
              contact
            </a>
          </li>
          <li className="nav-item">
            <a href={resume} target="_blank" rel="noreferrer">
              resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
