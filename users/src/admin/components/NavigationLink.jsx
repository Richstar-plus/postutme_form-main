import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function NavigationLink({ to, icon, label, extra, logout }) {
  return (
    <div
      className="admin-nav-menu-item"
      style={{ backgroundColor: logout ? "white" : "transparent"}}
    >
      <NavLink
        to={to}
        className={`admin-nav-link ${logout ? "admin-logout" : ""}`}
      >
        <div className="admin-nav-link-p">
          <p>
            <FontAwesomeIcon icon={icon} className="admin-nav-link-icon" />
            {label}
          </p>
          <p className={extra ? "admin-nav-link-extra" : ""}>{extra}</p>
        </div>
      </NavLink>
    </div>
  );
}
