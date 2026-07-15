import "./ServiceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceCard({
  title,
  value,
  subtitle,
  icon,
  iconColor = "#6C3BFF",
  graphColor = "#6C3BFF",
  onClick,
  loading = false,
}) {
  const graphId = `graph-${graphColor.replace("#", "")}`;

  return (
    <button className="service-card" type="button" onClick={onClick}>
      {loading ? (
        <div className="service-card-loading">Loading...</div>
      ) : (
        <>
          <div className="service-card-left">
            <div
              className="service-card-icon"
              style={{
                background: iconColor,
              }}
            >
              <FontAwesomeIcon icon={icon} />
            </div>

            <div className="service-card-content">
              <p className="service-card-title">{title}</p>

              <h2 className="service-card-value">{value}</h2>

              <p className="service-card-subtitle">{subtitle}</p>
            </div>
          </div>

          <div className="service-card-right">
            <svg
              className="service-card-graph"
              viewBox="0 0 120 45"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={graphId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={graphColor} stopOpacity=".25" />

                  <stop offset="100%" stopColor={graphColor} stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="
                M0 40
                C10 40,16 34,22 36
                C30 38,36 18,46 18
                C56 18,60 34,70 30
                C80 26,84 8,94 8
                C104 8,110 20,120 6
                "
                fill="none"
                stroke={graphColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="
                M0 40
                C10 40,16 34,22 36
                C30 38,36 18,46 18
                C56 18,60 34,70 30
                C80 26,84 8,94 8
                C104 8,110 20,120 6
                L120 45
                L0 45
                Z
                "
                fill={`url(#${graphId})`}
              />
            </svg>
          </div>
        </>
      )}
    </button>
  );
}
