import "./UsersToolbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faDownload,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function UsersToolbar({
  search,
  setSearch,
  role,
  setRole,
  status,
  setStatus,
  source,
  setSource,
  exportCSV,
}) {
  return (
    <div className="users-toolbar">

      {/* Search */}

      <div className="users-search">

        <FontAwesomeIcon
          icon={faSearch}
          className="users-search-icon"
        />

        <input
          type="text"
          placeholder="Search by name, email, phone or username..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* Role */}

      <select
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      >
        <option>All Roles</option>
        <option>Administrator</option>
        <option>Staff</option>
        <option>Student</option>
      </select>

      {/* Status */}

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Suspended</option>
      </select>

      {/* Registration Source */}

      <select
        value={source}
        onChange={(e) =>
          setSource(e.target.value)
        }
      >
        <option>All Registration Source</option>
        <option>Web</option>
        <option>Mobile App</option>
        <option>Admin Portal</option>
      </select>

      {/* Date Picker */}

      <button className="date-btn">
        <FontAwesomeIcon icon={faCalendarDays} />
        May 1, 2024 - May 31, 2024
      </button>

      {/* Export */}

      <button
        className="export-users-btn"
        onClick={exportCSV}
      >
        <FontAwesomeIcon icon={faDownload} />
        Export
      </button>

    </div>
  );
}