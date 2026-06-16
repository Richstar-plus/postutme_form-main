import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <div className="admin-app-header">
      <h2>Dashboard</h2>
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
