import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <section className="card">
      <h2>About</h2>
      <p>
        This project now uses React Router for navigation and FontAwesome for
        icons.
      </p>
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </section>
  );
}

export default AboutPage;
