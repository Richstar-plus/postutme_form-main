import "./PaymentCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PaymentCard({
  title,
  amount,
  percentage,
  trend,
  icon,
  iconColor,
  graphColor,
}) {
  return (
    <div className="main-payment-card">
      <div className="payment-card-header">
        <div
          className="payment-card-icon"
          style={{ backgroundColor: iconColor }}
        >
          <FontAwesomeIcon icon={icon} />
        </div>

        <div className="payment-card-info">
          <p className="payment-card-title">{title}</p>
          <h2 className="payment-card-amount">{amount}</h2>

          <div className="payment-card-footer">
            <span
              className={`payment-card-percentage ${
                trend === "up" ? "up" : "down"
              }`}
            >
              {trend === "up" ? "↑" : "↓"} {percentage}
            </span>

            <span className="payment-card-month">
              vs last month
            </span>
          </div>
        </div>
      </div>

      <svg
        className="payment-card-graph"
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
  );
}