import { useEffect, useState } from "react";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M14.5 6L8.5 12L14.5 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M9.5 6L15.5 12L9.5 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SchoolTable({
  schools,
  filteredCount,
  totalCount,
  currentPage,
  totalPages,
  pageSize,
  search,
  stateFilter,
  statusFilter,
  states,
  onSearch,
  onStateChange,
  onStatusChange,
  onPageChange,
  onPageSizeChange,
  onAddSchool,
  onViewSchool,
}) {
  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchInput);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className="school-main-card">
      <div className="school-table-toolbar">
        <div className="school-search">
          <SearchIcon />

          <input
            type="text"
            placeholder="Search by school name, code or state..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="school-filter">
          <select
            value={stateFilter}
            onChange={(e) => onStateChange(e.target.value)}
          >
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>

          <ChevronDown />
        </div>

        <div className="school-filter">
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <ChevronDown />
        </div>

        <button className="add-school-btn" onClick={onAddSchool} type="button">
          <PlusIcon />
          Add New School
        </button>
      </div>

      <div className="school-table-wrapper">
        <table className="schools-table">
          <thead>
            <tr>
              <th>School</th>
              <th>Code</th>
              <th>State</th>
              <th>Total Applications</th>
              <th>Total Users</th>
              <th>Total Revenue (₦)</th>
              <th>Status</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {schools.length === 0 ? (
              <tr>
                <td colSpan="9" className="empty-school-row">
                  No schools found
                </td>
              </tr>
            ) : (
              schools.map((school) => (
                <tr key={school.id}>
                  <td>
                    <div className="school-name-cell">
                      <div className="school-logo">{school.shortName}</div>

                      <span>{school.name}</span>
                    </div>
                  </td>

                  <td>{school.code}</td>

                  <td>{school.state}</td>

                  <td>{school.applications.toLocaleString()}</td>

                  <td>{school.users.toLocaleString()}</td>

                  <td>₦{school.revenue.toLocaleString()}</td>

                  <td>
                    <span
                      className={`school-status ${school.status.toLowerCase()}`}
                    >
                      {school.status}
                    </span>
                  </td>

                  <td>
                    <div className="school-date">
                      <span>{school.date}</span>
                      <small>{school.time}</small>
                    </div>
                  </td>

                  <td>
                    <button
                      className="view-school-btn"
                      type="button"
                      onClick={() => onViewSchool(school)}
                    >
                      View
                      <ChevronDown />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="school-table-footer">
        <span>
          Showing {filteredCount === 0 ? 0 : (currentPage - 1) * pageSize + 1}{" "}
          to {Math.min(currentPage * pageSize, filteredCount)} of{" "}
          {filteredCount}{" "}
          {filteredCount === totalCount ? "results" : "filtered results"}
        </span>

        <div className="pagination">
          <button
            type="button"
            className="pagination-arrow"
            disabled={currentPage === 1}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          >
            <LeftIcon />
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span className="pagination-dots" key={`dots-${index}`}>
                ...
              </span>
            ) : (
              <button
                type="button"
                key={page}
                className={`pagination-number ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ),
          )}

          <button
            type="button"
            className="pagination-arrow"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          >
            <RightIcon />
          </button>
        </div>

        <div className="page-size-select">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(e.target.value)}
          >
            <option value="10">10 / page</option>
            <option value="20">20 / page</option>
            <option value="30">30 / page</option>
            <option value="50">50 / page</option>
          </select>

          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
