import "./TableToolbar.css";

import {
  faSearch,
  faDownload,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TableToolbar({
  searchTerm,
  setSearchTerm,
  selectedService,
  setSelectedService,
  selectedSchool,
  setSelectedSchool,
  selectedStatus,
  setSelectedStatus,
  exportCSV,
}) {
  const services = [
    "All Services",
    "Post UTME Registration",
    "JAMB Registration",
    "Admission Processing",
    "School Fees Payment",
    "Transcript Processing",
  ];

  const schools = [
    "All Schools",
    "University of Lagos",
    "University of Port Harcourt",
    "Rivers State University",
    "Ignatius Ajuru University",
    "Federal University Otuoke",
  ];

  const statuses = [
    "All Statuses",
    "Pending",
    "Approved",
    "Rejected",
    "Processing",
  ];

  return (
    <div className="toolbar-container">
      <div className="toolbar-left">
        <div className="search-container">
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
          />

          <input
            type="text"
            placeholder="Search applicants..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>
      </div>

      <div className="toolbar-right">
        <div className="filter-group">
          <FontAwesomeIcon
            icon={faFilter}
            className="filter-icon"
          />

          <select
            value={selectedService}
            onChange={(e) =>
              setSelectedService(e.target.value)
            }
          >
            {services.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <select
            value={selectedSchool}
            onChange={(e) =>
              setSelectedSchool(e.target.value)
            }
          >
            {schools.map((school) => (
              <option
                key={school}
                value={school}
              >
                {school}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <select
            value={selectedStatus}
            onChange={(e) =>
              setSelectedStatus(e.target.value)
            }
          >
            {statuses.map((status) => (
              <option
                key={status}
                value={status}
              >
                {status}
              </option>
            ))}
          </select>
        </div>

        <button
          className="export-btn"
          onClick={exportCSV}
        >
          <FontAwesomeIcon icon={faDownload} />
          Export
        </button>
      </div>
    </div>
  );
}