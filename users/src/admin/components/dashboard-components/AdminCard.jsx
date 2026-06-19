import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function AdminCard({ image, title, price, children, className }) {
  return (
    <section className="admin-small-card">
      <div
        className={`
          card-icon-container ${
            className === "first"
              ? "first-card-icon"
              : className === "second"
                ? "second-card-icon"
                : className === "third"
                  ? "third-card-icon"
                  : className === "fourth"
                    ? "fourth-card-icon"
                    : ""
          }`}
      >
        {image && <FontAwesomeIcon icon={image} className="card-icon" />}
      </div>
      <div className="card-details">
        <h2>{title}</h2>
        <p>{className === "second" ? "₦" : ""}{price}</p>
      </div>
      {children}
    </section>
  );
}
