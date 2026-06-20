import { useState } from "react";
import "./TableRow.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEye,
  faPen,
  faTrash,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function TableRow({
  application,
  selected,
  onSelect,
}) {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "status-approved";

      case "pending":
        return "status-pending";

      case "processing":
        return "status-processing";

      case "rejected":
        return "status-rejected";

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
          onChange={() => onSelect(application.id)}
        />
      </td>

      {/* Applicant */}
      <td>
        <div className="applicant-cell">
          <div className="applicant-details">
            <span className="applicant-name">
              {application.applicantName}
            </span>

            <span className="applicant-email">
              {application.email}
            </span>
          </div>
        </div>
      </td>

      {/* Service */}
      <td>
        <div className="service-badge">
          <FontAwesomeIcon
            icon={faGraduationCap}
          />

          {application.service}
        </div>
      </td>

      {/* School */}
      <td>
        <span className="school-text">
          {application.school}
        </span>
      </td>

      {/* Reference */}
      <td>
        <span className="reference-number">
          {application.reference}
        </span>
      </td>

      {/* Amount */}
      <td>
        <span className="amount-text">
          ₦{application.amount.toLocaleString()}
        </span>
      </td>

      {/* Status */}
      <td>
        <span
          className={`status-badge ${getStatusClass(
            application.status
          )}`}
        >
          {application.status}
        </span>
      </td>

      {/* Date */}
      <td>
        <span className="submitted-date">
          {application.submittedDate}
        </span>
      </td>

      {/* Actions */}
      <td>
        <div className="actions-wrapper">
          <button
            className="action-button"
            onClick={() =>
              setShowMenu(!showMenu)
            }
          >
            <FontAwesomeIcon
              icon={faEllipsisVertical}
            />
          </button>

          {showMenu && (
            <div className="actions-menu">
              <button
                className="menu-item"
                onClick={() => {
                  alert(
                    `Viewing ${application.applicantName}`
                  );
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon icon={faEye} />
                View
              </button>

              <button
                className="menu-item"
                onClick={() => {
                  alert(
                    `Editing ${application.applicantName}`
                  );
                  setShowMenu(false);
                }}
              >
                <FontAwesomeIcon icon={faPen} />
                Edit
              </button>

              <button
                className="menu-item delete"
                onClick={() => {
                  alert(
                    `Deleting ${application.applicantName}`
                  );
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