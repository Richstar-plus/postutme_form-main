import "./Applications.css";

import {
  faFileLines,
  faHourglassHalf,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { ApplicationCard } from "../components/applications-components/ApplicationCard";
import ApplicationsTable from "../components/applications-components/ApplicationsTable"

export function Applications() {
  return (
    <div className="application-container">
      <div className="application-nav-indicator">
        <p>Dashboard</p>
        <p>{">"}</p>
        <p>Applications</p>
      </div>

      <div className="application-content-card-holder">
        <ApplicationCard
          title="Total Applications"
          value="3,842"
          percentage="18.4%"
          trend="up"
          icon={faFileLines}
          graphColor="#8B5CF6"
        />

        <ApplicationCard
          title="Pending"
          value="256"
          percentage="12.3%"
          trend="up"
          icon={faHourglassHalf}
          graphColor="#22C55E"
        />

        <ApplicationCard
          title="Completed"
          value="3,586"
          percentage="20.1%"
          trend="up"
          icon={faCircleCheck}
          graphColor="#3B82F6"
        />

        <ApplicationCard
          title="Cancelled"
          value="134"
          percentage="5.6%"
          trend="down"
          icon={faCircleXmark}
          graphColor="#F59E0B"
        />
      </div>

      <div className="application-table-holder">
        <ApplicationsTable />
      </div>

    </div>
  );
}