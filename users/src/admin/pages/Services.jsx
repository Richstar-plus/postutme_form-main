import "./Services.css";

import ServiceCard from "../components/services-components/ServiceCard";

import {
  faCube,
  faCircleCheck,
  faCirclePause,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export function Services() {
  const handleCardClick = (type) => {
    switch (type) {
      case "total":
        alert("Opening all services...");
        break;

      case "active":
        alert("Opening active services...");
        break;

      case "inactive":
        alert("Opening inactive services...");
        break;

      case "orders":
        alert("Opening all orders...");
        break;

      default:
        break;
    }
  };
  return (
    <div className="services-container">
      <div className="application-nav-indicator">
        <p>Dashboard</p>
        <p>{">"}</p>
        <p>Services</p>
      </div>
      <div className="services-content-card-holder">
        <ServiceCard
          title="Total Services"
          value="9"
          subtitle="Active services"
          icon={faCube}
          iconColor="#7C3AED"
          graphColor="#7C3AED"
          onClick={() => handleCardClick("total")}
        />
        <ServiceCard
          title="Active Services"
          value="9"
          subtitle="100% of total"
          icon={faCircleCheck}
          iconColor="#22C55E"
          graphColor="#22C55E"
          onClick={() => handleCardClick("active")}
        />

        <ServiceCard
          title="Inactive Services"
          value="0"
          subtitle="0% of total"
          icon={faCirclePause}
          iconColor="#F59E0B"
          graphColor="#F59E0B"
          onClick={() => handleCardClick("inactive")}
        />

        <ServiceCard
          title="Total Orders"
          value="3,842"
          subtitle="Across all services"
          icon={faClipboardList}
          iconColor="#3B82F6"
          graphColor="#3B82F6"
          onClick={() => handleCardClick("orders")}
        />
      </div>
    </div>
  );
}
