import "./ServiceBreakDownCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCloudArrowUp,
  faRightLeft,
  faFileLines,
  faDesktop,
  faClipboard,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faGraduationCap,
    count: "1,256",
    title: "Post UTME Registration",
    color: "#EEE7FF",
    iconColor: "#7C3AED",
  },
  {
    icon: faCloudArrowUp,
    count: "982",
    title: "JAMB O'Level Upload",
    color: "#E8F1FF",
    iconColor: "#2563EB",
  },
  {
    icon: faRightLeft,
    count: "678",
    title: "Change of Institution/Course",
    color: "#FFF1DD",
    iconColor: "#F59E0B",
  },
  {
    icon: faFileLines,
    count: "384",
    title: "Birth Certificates",
    color: "#FFE7EF",
    iconColor: "#F43F5E",
  },
  {
    icon: faDesktop,
    count: "312",
    title: "JAMB Admission Status",
    color: "#E7F9ED",
    iconColor: "#22C55E",
  },
  {
    icon: faClipboard,
    count: "230",
    title: "JAMB Admission Letter",
    color: "#F0E8FF",
    iconColor: "#7C3AED",
  },
  {
    icon: faChartColumn,
    count: "198",
    title: "JAMB Original Results",
    color: "#E5F8FC",
    iconColor: "#06B6D4",
  },
];

export default function ServiceBreakDownCard() {
  return (
    <div className="service-breakdown-card">
      <h3>Services Breakdown</h3>

      <div className="service-items">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div
              className="service-icon"
              style={{ backgroundColor: service.color }}
            >
              <FontAwesomeIcon
                icon={service.icon}
                style={{ color: service.iconColor }}
              />
            </div>

            <h4>{service.count}</h4>
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}