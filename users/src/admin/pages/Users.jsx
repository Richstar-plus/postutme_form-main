import {UserStatCard} from "../components/users-components/UserStatCard";
import { faUsers, faUserPlus, faUserClock, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import UsersTable from "../components/users-components/UsersTable";
import "./Users.css";

export function Users() {
  return (
    <div className="users-container">
      <div className="application-nav-indicator">
        <p>Dashboard</p>
        <p>{">"}</p>
        <p>Users</p>
      </div>

      <div className="users-card-holder">
        <UserStatCard
          title="Total Users"
          value="1,028"
          percentage="15.6%"
          trend="up"
          icon={faUsers}
          iconColor="#7C3AED"
          graphColor="#7C3AED"
      />

        <UserStatCard
          title="Active Users"
          value="892"
          percentage="18.4%"
          trend="up"
          icon={faUserPlus}
          iconColor="#22C55E"
          graphColor="#22C55E"
        />

        <UserStatCard
          title="Inactive Users"
          value="98"
          percentage="4.3%"
          trend="down"
          icon={faUserClock}
          iconColor="#F59E0B"
          graphColor="#F59E0B"
        />

        <UserStatCard
          title="Suspended Users"
          value="38"
          percentage="12.5%"
          trend="down"
          icon={faCircleXmark}
          iconColor="#F43F5E"
          graphColor="#FB7185"
        />
      </div>

      <div className="users-table-main-container">
        <UsersTable />
      </div>
    </div>
  );
}