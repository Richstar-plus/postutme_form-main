import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "../components/Hero";
import { CardInfo } from "../components/CardInfo";
import { Date } from "../components/Date";
import { Support } from "../components/Support";
import { Comment } from "../components/Comment";
import { useState } from "react";

function HomePage() {
  const [showRegistration, setShowRegistration] = useState(false);

  function handleButtonSwitch() {
    setShowRegistration(true);
  }
  return (
    <>
      <section className="card">
        <p className="card-title">richstar Online Services</p>
        <h2 className="card-heading">
          Secure Your Academic Future with Naija Campus Hub - Your Ultimate
          Post-UTME/Screening Companion!
        </h2>
      </section>
      <section className="card">
        <p className="card-description">
          Applications are now open for the 2025/2026 Academic session! Don't
          miss out on this opportunity to secure your spot in your dream
          university.
        </p>
      </section>
      <section
        className={`card application-btn ${showRegistration ? "hidden" : ""}`}
      >
        <div className="main-button">
          <Button
            title="Start Application"
            className="primary-btn"
            onClick={handleButtonSwitch}
          >
            <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
          </Button>
          <Button title="Check Status" className="secondary-btn" />
        </div>
      </section>
      <section
        className={`card registration-input ${showRegistration ? "" : "hidden"}`}
      >
        <form action="">
          <input type="text" placeholder="Enter JAMB Registration Number" />
          <Button title="Submit" />
        </form>
      </section>
      <section className="card">
        <Hero />
      </section>
      <section className="card">
        <CardInfo />
      </section>
      <section className="card">
        <div className="date">
          <h3>
            <FontAwesomeIcon icon={faCalendar} /> Key Dates
          </h3>
          <Date
            school="Ignatius Ajuru University of Education"
            registrationStart="August 1"
            registrationEnd="August 31"
          />
          <Date
            school="Rivers State University"
            registrationStart="July 15"
            registrationEnd="August 15"
          />
        </div>
      </section>
      <section className="card">
        <Support />
      </section>
      <section className="card">
        <Comment />
      </section>
    </>
  );
}

export default HomePage;
