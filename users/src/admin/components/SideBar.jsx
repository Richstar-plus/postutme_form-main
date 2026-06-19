import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { NavigationLink } from "./NavigationLink";
import {
  faFileAlt,
  faGaugeHigh,
  faCreditCard,
  faUsers,
  faBriefcase,
  faSchool,
  faMoneyBillTransfer,
  faBell,
  faChartBar,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export function SideBar() {
  return (
    <div className="admin-app-sidebar">
      <div className="admin-logo-container">
        <div className="admin-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="admin-title">
          <h3>Naija Campus Connect</h3>
          <p>Admin Panel</p>
        </div>
      </div>
      <nav className="admin-nav-menu">
        <div className="admin-nav-menu-item">
          <NavigationLink
            to="/admin"
            className="admin-nav-link"
            icon={faGaugeHigh}
            label="Dashboard"
            end
          />
        </div>

        <div className="admin-nav-menu-item">
          <h4>Management</h4>
          <NavigationLink
            to="/admin/applications"
            className="admin-nav-link"
            icon={faFileAlt}
            label="Applications"
            extra="123"
          />

          <NavigationLink
            to="/admin/payments"
            className="admin-nav-link"
            icon={faCreditCard}
            label="Payments"
            extra="45"
          />

          <NavigationLink
            to="/admin/users"
            className="admin-nav-link"
            icon={faUsers}
            label="Users"
            extra="67"
          />

          <NavigationLink
            to="/admin/services"
            className="admin-nav-link"
            icon={faBriefcase}
            label="Services"
          />

          <NavigationLink
            to="/admin/schools"
            className="admin-nav-link"
            icon={faSchool}
            label="Schools"
          />
        </div>

        <div className="admin-nav-menu-item">
          <h4>Others</h4>
          <NavigationLink
            to="/admin/transactions"
            className="admin-nav-link"
            icon={faMoneyBillTransfer}
            label="Transactions"
          />

          <NavigationLink
            to="/admin/notifications"
            className="admin-nav-link"
            icon={faBell}
            label="Notifications"
            extra="3"
          />

          <NavigationLink
            to="/admin/reports"
            className="admin-nav-link"
            icon={faChartBar}
            label="Reports"
          />

          <NavigationLink
            to="/admin/settings"
            className="admin-nav-link"
            icon={faGear}
            label="Settings"
          />
        </div>

        <div className="admin-nav-menu-item admin-logout">
          <NavigationLink
            to="/admin/logout"
            className="admin-nav-link"
            icon={faRightFromBracket}
            label="Logout"
            logout
          />
        </div>
      </nav>
    </div>
  );
}
