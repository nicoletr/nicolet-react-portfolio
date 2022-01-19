import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a href="#home" className="navbar-header">
          hi, i'm nicole
        </a>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
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
                currentPage === "Work" ? "nav-link active" : "nav-link"
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
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="./assets/Nicole-Trpevski-WD-Resume.pdf"
              download
              target="_blank"
            >
              resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
