import "./ApplicationCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ApplicationCard({
  title,
  value,
  percentage,
  trend = "up",
  icon,
  graphColor,
}) {
  return (
    <div className="main-application-card">
      <div className="application-card-top">
        <div
          className="application-card-icon"
          style={{ backgroundColor: `${graphColor}20` }}
        >
          <FontAwesomeIcon
            icon={icon}
            style={{ color: graphColor }}
          />
        </div>

        <svg
          className="application-card-graph"
          viewBox="0 0 120 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0 35
               C10 35,15 30,20 28
               C25 25,30 22,35 25
               C40 28,45 35,50 30
               C55 25,60 15,70 15
               C80 15,85 25,90 20
               C95 15,100 5,120 2"
            fill="none"
            stroke={graphColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="application-card-content">
        <p className="application-card-title">{title}</p>

        <h2 className="application-card-value">{value}</h2>

        <div className="application-card-footer">
          <span
            className={`application-card-percentage ${
              trend === "up" ? "up" : "down"
            }`}
          >
            {trend === "up" ? "↑" : "↓"} {percentage}
          </span>

          <span className="application-card-month">
            vs last month
          </span>
        </div>
      </div>
    </div>
  );
}