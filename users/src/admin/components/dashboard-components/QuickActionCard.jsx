import "./QuickActionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBuildingColumns,
  faWallet,
  faBarsProgress,
  faChartSimple,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const actions = [
  {
    icon: faPlus,
    title: "Add New Service",
    bg: "#EEF4FF",
    color: "#2563EB",
  },
  {
    icon: faBuildingColumns,
    title: "Manage Schools",
    bg: "#F2EEFF",
    color: "#7C3AED",
  },
  {
    icon: faWallet,
    title: "View Payments",
    bg: "#ECFAF1",
    color: "#22C55E",
  },
  {
    icon: faBarsProgress,
    title: "All Applications",
    bg: "#FFF3E1",
    color: "#F59E0B",
  },
  {
    icon: faChartSimple,
    title: "Generate Report",
    bg: "#FFE9F0",
    color: "#F43F5E",
  },
  {
    icon: faPaperPlane,
    title: "Send Notification",
    bg: "#EEF2FF",
    color: "#4F46E5",
  },
];

export default function QuickActionCard() {
  return (
    <div className="quick-action-card">
      <h3>Quick Actions</h3>

      <div className="action-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className="action-btn"
            style={{ backgroundColor: action.bg }}
          >
            <FontAwesomeIcon
              icon={action.icon}
              style={{ color: action.color }}
            />
            <span>{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}