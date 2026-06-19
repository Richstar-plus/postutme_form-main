import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const adminRouteTitles = {
  "/admin": "Dashboard",
  "/admin/applications": "Applications",
  "/admin/payments": "Payments",
  "/admin/users": "Users",
  "/admin/services": "Services",
  "/admin/schools": "Schools",
  "/admin/transactions": "Transactions",
  "/admin/notifications": "Notifications",
  "/admin/reports": "Reports",
  "/admin/settings": "Settings",
};

function formatRouteTitle(pathname) {
  return pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) ?? "Dashboard";
}

export function Header() {
  const location = useLocation();
  const title = adminRouteTitles[location.pathname] || formatRouteTitle(location.pathname);

  return (
    <div className="admin-app-header">
      <h2>{title}</h2>
      <div className="admin-header-details-container">
        <div className="admin-search-container">
          <input
            type="text"
            placeholder="Search by name, email or reference..."
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="admin-notification-container">
          <span className="admin-notification-count">3</span>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="profile-container">
          <div className="profile-image-container">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="profile-picture"
            />
            <div className="admin-active"></div>
          </div>
          <div className="profile-name">
            <span>John Doe</span>
            <p className="profile-role">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
