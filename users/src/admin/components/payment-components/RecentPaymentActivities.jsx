import "./RecentPaymentActivities.css";

import {
  faCheckCircle,
  faClock,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const activities = [
  {
    id: 1,
    title: "Payment received",
    description:
      "Post UTME Registration payment from Adedayo Adekunle",
    amount: "₦2,500",
    time: "10 mins ago",
    status: "success",
    icon: faCheckCircle,
  },
  {
    id: 2,
    title: "Payment pending",
    description:
      "Change of Institution/Course payment from Chinedu Michael",
    amount: "₦2,000",
    time: "35 mins ago",
    status: "pending",
    icon: faClock,
  },
  {
    id: 3,
    title: "Payment failed",
    description:
      "JAMB Admission Letter payment from Patience Onuoha",
    amount: "₦1,000",
    time: "1 hour ago",
    status: "failed",
    icon: faTimesCircle,
  },
  {
    id: 4,
    title: "Payment received",
    description:
      "Birth Certificate payment from Fatima Sani",
    amount: "₦1,200",
    time: "2 hours ago",
    status: "success",
    icon: faCheckCircle,
  },
  {
    id: 5,
    title: "Payment received",
    description:
      "JAMB O'Level Upload payment from Blessing Okoro",
    amount: "₦1,500",
    time: "3 hours ago",
    status: "success",
    icon: faCheckCircle,
  },
];
export default function RecentPaymentActivities() {
  return (
    <div className="recent-activities-card">
      <div className="recent-activities-header">
        <h3>Recent Payment Activities</h3>

        <button className="view-all-btn">
          View all activity →
        </button>
      </div>

      <div className="activities-list">
        {activities.map((activity) => (
          <div
            className="activity-item"
            key={activity.id}
          >
            <div
              className={`activity-icon ${activity.status}`}
            >
              <FontAwesomeIcon
                icon={activity.icon}
              />
            </div>

            <div className="activity-content">
              <div className="activity-top">
                <h4>{activity.title}</h4>

                <span className="activity-amount">
                  {activity.amount}
                </span>
              </div>

              <p>
                {activity.description}
              </p>

              <small>
                {activity.time}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}