import { Link } from "react-router-dom";

export default function AdminErrorPage() {
  return (
    <section className="admin-card">
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/admin">
        <button type="button">Return to admin</button>
      </Link>
    </section>
  );
}
