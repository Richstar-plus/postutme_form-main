import { useEffect, useRef, useState } from "react";
import "./UserRow.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faEye,
  faPenToSquare,
  faTrash,
  faBan,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function UserRow({
  user,
  selected,
  toggleRow,
  onView,
  onEdit,
  onDelete,
  onToggleStatus,
}) {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  /* ----------------------------
      CLOSE MENU ON OUTSIDE CLICK
  ----------------------------- */

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      closeMenu
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        closeMenu
      );
  }, []);

  /* ----------------------------
      STATUS CLASS
  ----------------------------- */

  const getStatusClass = () => {
    switch (user.status) {
      case "Active":
        return "status-active";

      case "Inactive":
        return "status-inactive";

      case "Suspended":
        return "status-suspended";

      default:
        return "";
    }
  };

  return (
    <tr>

      {/* Checkbox */}

      <td>

        <input
          type="checkbox"
          checked={selected}
          onChange={() =>
            toggleRow(user.id)
          }
        />

      </td>

      {/* User */}

      <td>

        <div className="user-cell">

          <img
            src={user.avatar}
            alt={user.name}
            className="user-avatar"
          />

          <div className="user-info">

            <span className="user-name">
              {user.name}
            </span>

            <span className="user-username">
              @{user.username}
            </span>

          </div>

        </div>

      </td>

      {/* Email */}

      <td>

        <span className="user-email">
          {user.email}
        </span>

      </td>

      {/* Phone */}

      <td>

        <span className="user-phone">
          {user.phone}
        </span>

      </td>

      {/* Registered */}

      <td>

        <div className="user-date">

          <span>{user.registered}</span>

          <small>{user.time}</small>

        </div>

      </td>

      {/* Registration Source */}

      <td>{user.source}</td>

      {/* Status */}

      <td>

        <span
          className={`status-badge ${getStatusClass()}`}
        >
          {user.status}
        </span>

      </td>

      {/* Actions */}

      <td>

        <div
          className="action-container"
          ref={menuRef}
        >

          <button
            className="action-btn"
            onClick={() =>
              setShowMenu(!showMenu)
            }
          >
            View

            <FontAwesomeIcon
              icon={faChevronDown}
            />
          </button>

          {showMenu && (

            <div className="action-dropdown">

              <button
                onClick={() => {
                  onView(user);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faEye}
                />

                View Details

              </button>

              <button
                onClick={() => {
                  onEdit(user);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                />

                Edit User

              </button>

              <button
                onClick={() => {
                  onToggleStatus(user.id);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon
                  icon={
                    user.status ===
                    "Suspended"
                      ? faRotateLeft
                      : faBan
                  }
                />

                {user.status ===
                "Suspended"
                  ? "Activate User"
                  : "Suspend User"}

              </button>

              <button
                className="delete-btn"
                onClick={() => {
                  onDelete(user.id);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                />

                Delete User

              </button>

            </div>

          )}

        </div>

      </td>

    </tr>
  );
}