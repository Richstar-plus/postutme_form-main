import "./UserStatCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function UserStatCard({
  title,
  value,
  percentage,
  trend = "up",
  icon,
  iconColor,
  graphColor,
}) {
  return (
    <div className="user-stat-card">
      <div className="user-stat-left">
        <div
          className="user-stat-icon"
          style={{ backgroundColor: iconColor }}
        >
          <FontAwesomeIcon icon={icon} />
        </div>

        <div className="user-stat-content">
          <p className="user-stat-title">{title}</p>

          <h2 className="user-stat-value">{value}</h2>

          <div className="user-stat-footer">
            <span
              className={`user-stat-percentage ${
                trend === "up"
                  ? "user-stat-up"
                  : "user-stat-down"
              }`}
            >
              {trend === "up" ? "↑" : "↓"} {percentage}
            </span>

            <span className="user-stat-month">
              vs last month
            </span>
          </div>
        </div>
      </div>

      <div className="user-stat-right">
        <svg
          className="user-stat-graph"
          viewBox="0 0 120 45"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id={`gradient-${graphColor.replace("#", "")}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={graphColor}
                stopOpacity="0.25"
              />

              <stop
                offset="100%"
                stopColor={graphColor}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="
            M0 40
            C10 38,18 30,25 32
            C35 34,40 42,50 28
            C60 14,70 18,78 30
            C88 44,96 20,105 12
            C112 6,116 10,120 6
          "
            fill="none"
            stroke={graphColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="
            M0 40
            C10 38,18 30,25 32
            C35 34,40 42,50 28
            C60 14,70 18,78 30
            C88 44,96 20,105 12
            C112 6,116 10,120 6
            L120 45
            L0 45
            Z
          "
            fill={`url(#gradient-${graphColor.replace("#", "")})`}
          />
        </svg>
      </div>
    </div>
  );
}