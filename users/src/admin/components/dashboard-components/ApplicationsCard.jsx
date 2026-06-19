import "./ApplicationCard.css";
import {
  faGraduationCap,
  faCloudArrowUp,
  faRightLeft,
  faFileLines,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ApplicationCard() {
  const applications = [
    {
      icon: faGraduationCap,
      title: "Post UTME Registration",
      ref: "PUTME-24158",
      status: "Pending",
      time: "2 mins ago",
      iconClass: "green",
      statusClass: "pending",
    },
    {
      icon: faCloudArrowUp,
      title: "JAMB O'Level Upload",
      ref: "OL-24157",
      status: "Pending",
      time: "15 mins ago",
      iconClass: "purple",
      statusClass: "pending",
    },
    {
      icon: faRightLeft,
      title: "Change of Institution/Course",
      ref: "CIC-24156",
      status: "Pending",
      time: "28 mins ago",
      iconClass: "orange",
      statusClass: "pending",
    },
    {
      icon: faFileLines,
      title: "Birth Certificate",
      ref: "BC-24155",
      status: "Completed",
      time: "1 hour ago",
      iconClass: "pink",
      statusClass: "completed",
    },
    {
      icon: faAddressCard,
      title: "JAMB Admission Status",
      ref: "JAS-24154",
      status: "Completed",
      time: "2 hours ago",
      iconClass: "cyan",
      statusClass: "completed",
    },
  ];

  return (
    <div className="application-card">
      <div className="application-header">
        <h3>Recent Applications</h3>
        <span>View all</span>
      </div>

      {applications.map((item, index) => (
        <div className="application-item" key={index}>
          <div className="application-left">
            <div className={`application-icon ${item.iconClass}`}>
              <FontAwesomeIcon icon={item.icon} />
            </div>

            <div className="application-info">
              <h4>{item.title}</h4>
              <p>Ref: {item.ref}</p>
            </div>
          </div>

          <div className="application-right">
            <div className={`status ${item.statusClass}`}>
              {item.status}
            </div>
            <small>{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
}