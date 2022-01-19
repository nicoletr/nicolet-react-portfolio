import React from "react";
import "../../App.css";
import Me from "../../assets/images/me.jpg";

function Home() {
  return (
    <main className="page-wrapper">
      {/* About Me */}
      <section className="col page-section" id="bio">
        <div className="col col-sm-8 col-md-8 col-lg-8" id="about-me">
          <div id="text-background">
            <div id="text-wrapper">
              been working in media for nearly 10 years.
              <br />
              life is getting boring...
              <br />
              web development is my next step <br />
              bring it on.
            </div>
          </div>
        </div>
        <div className="col col-sm-4 col-md-4 col-lg-4">
          <img id="my-image" src={Me} alt="i should be here..." />
        </div>
      </section>
      {/* portfolio container */}
      <section className="col page-section" id="my-work">
        <a
          className="col work"
          id="work-one"
          href="https://nicoletr.github.io/project1-finance-tracker/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>cryptocurrency tracker</h3>
        </a>
        <a
          className="col work"
          id="work-two"
          href="https://nicoletr.github.io/weather-dashboard-HW-06/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>weather dashboard</h3>
        </a>
        <a
          className="col work"
          id="work-three"
          href="https://nicoletr.github.io/work-day-scheduler-HW-05/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>work-day planner</h3>
        </a>
      </section>
    </main>
  );
}

export default Home;
