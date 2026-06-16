import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <div className="app-sidebar">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title">
          <h3>Naija Campus Connect</h3>
          <p>Admin Panel</p>
        </div>
      </div>
      <nav className="nav-menu">
        <div className="nav-menu-item">
          <NavLink to="/" className="nav-link active">
            Dashboard
          </NavLink>
        </div>

        <div className="nav-menu-item">
          <h4>Management</h4>
          <NavLink to="/" className="nav-link">
            <p>
              Applications <span>123</span>
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
