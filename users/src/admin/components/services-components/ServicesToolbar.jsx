import "./ServicesToolbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesToolbar({
  search,
  setSearch,
  status,
  setStatus,
  exportCSV,
  onAddService,
}) {
  return (
    <div className="services-toolbar">
      {/* Left Section */}

      <div className="toolbar-left">
        {/* Search */}

        <div className="main-service-search">
          <FontAwesomeIcon icon={faSearch} className="main-service-search-icon" />

          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Status Filter */}

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Right Section */}

      <div className="toolbar-right">
        <button className="export-btn" onClick={exportCSV}>
          <FontAwesomeIcon icon={faDownload} />
          Export
        </button>

        <button className="add-service-btn" onClick={onAddService}>
          <FontAwesomeIcon icon={faPlus} />
          Add New Service
        </button>
      </div>
    </div>
  );
}
