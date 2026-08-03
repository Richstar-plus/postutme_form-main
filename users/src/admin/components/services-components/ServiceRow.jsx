import { useEffect, useRef, useState } from "react";
import "./ServiceRow.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEllipsisVertical,
  faEye,
  faPen,
  faCopy,
  faTrash,
  faToggleOn,
  faToggleOff,
  faGraduationCap,
  faFileLines,
  faSchool,
  faFileSignature,
  faUniversity,
  faIdCard,
  faCertificate,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  graduation: faGraduationCap,
  jamb: faFileLines,
  school: faSchool,
  affidavit: faFileSignature,
  admission: faUniversity,
  idcard: faIdCard,
  certificate: faCertificate,
  web: faGlobe,
};

export default function ServiceRow({
  service,
  selected,
  toggleRow,
  onView,
  onEdit,
  onDuplicate,
  onDelete,
  onToggleStatus,
}) {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  const statusClass =
    service.status === "Active" ? "status-active" : "status-inactive";

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => toggleRow(service.id)}
        />
      </td>

      {/* Service */}

      <td>
        <div className="service-cell">
          <div className="service-details">
            <span className="service-name">{service.name}</span>

            <span className="service-code">{service.code}</span>
          </div>
        </div>
      </td>

      {/* Category */}

      <td>
        <span className="category-badge">{service.category}</span>
      </td>

      {/* Price */}

      <td>
        <span className="service-price">₦{service.price.toLocaleString()}</span>
      </td>

      {/* Orders */}

      <td>
        <span className="service-orders">{service.orders}</span>
      </td>

      {/* Status */}

      <td>
        <span className={`status-badge ${statusClass}`}>{service.status}</span>
      </td>

      {/* Created */}

      <td>
        <div className="created-date">
          <span>{service.date}</span>
          <small>{service.time}</small>
        </div>
      </td>

      {/* Actions */}

      <td>
        <div className="action-wrapper" ref={menuRef}>
          <button
            className="action-menu-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>

          {showMenu && (
            <div className="action-dropdown">
              <button
                onClick={() => {
                  onView(service);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon icon={faEye} />
                View
              </button>

              <button
                onClick={() => {
                  onEdit(service);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon icon={faPen} />
                Edit
              </button>

              <button
                onClick={() => {
                  onDuplicate(service);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon icon={faCopy} />
                Duplicate
              </button>

              <button
                onClick={() => {
                  onToggleStatus(service.id);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon
                  icon={service.status === "Active" ? faToggleOff : faToggleOn}
                />

                {service.status === "Active" ? "Deactivate" : "Activate"}
              </button>

              <button
                className="delete-action"
                onClick={() => {
                  onDelete(service.id);
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}
