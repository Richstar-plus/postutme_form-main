import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="card">
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button type="button">Return home</button>
      </Link>
    </section>
  );
}

export default ErrorPage;
