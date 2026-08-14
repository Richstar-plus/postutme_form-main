import { useMemo, useState } from "react";
import SchoolStats from "../components/SchoolStats";
import SchoolTable from "../components/SchoolTable";
import SchoolSidebar from "../components/SchoolSidebar";
import AddSchoolModal from "../components/AddSchoolModal";
import { initialSchools } from "../data/schoolsData";
import "./Schools.css";

export function Schools() {
  const [schools, setSchools] = useState(initialSchools);

  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("All States");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const [showStates, setShowStates] = useState(false);

  const states = useMemo(() => {
    return [
      "All States",
      ...Array.from(new Set(schools.map((school) => school.state))).sort(),
    ];
  }, [schools]);

  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        school.name.toLowerCase().includes(searchValue) ||
        school.code.toLowerCase().includes(searchValue) ||
        school.state.toLowerCase().includes(searchValue);

      const matchesState =
        stateFilter === "All States" || school.state === stateFilter;

      const matchesStatus =
        statusFilter === "All Status" || school.status === statusFilter;

      return matchesSearch && matchesState && matchesStatus;
    });
  }, [schools, search, stateFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredSchools.length / pageSize));

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedSchools = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize;
    return filteredSchools.slice(start, start + pageSize);
  }, [filteredSchools, safeCurrentPage, pageSize]);

  const activeSchools = schools.filter(
    (school) => school.status === "Active",
  ).length;

  const inactiveSchools = schools.filter(
    (school) => school.status === "Inactive",
  ).length;

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleStateChange = (value) => {
    setStateFilter(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(Number(value));
    setCurrentPage(1);
  };

  const handleAddSchool = (newSchool) => {
    setSchools((prev) => [
      {
        ...newSchool,
        id: Date.now(),
      },
      ...prev,
    ]);

    setShowAddModal(false);
    setCurrentPage(1);
  };

  return (
    <div className="schools-container">
      <div className="application-nav-indicator">
        <p>Dashboard</p>
        <p>{">"}</p>
        <p>Schools</p>
      </div>

      <div className="main-school-container">
        <SchoolStats
          totalSchools={schools.length}
          activeSchools={activeSchools}
          inactiveSchools={inactiveSchools}
        />

        <div className="schools-content-grid">
          <SchoolTable
            schools={paginatedSchools}
            filteredCount={filteredSchools.length}
            totalCount={schools.length}
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            search={search}
            stateFilter={stateFilter}
            statusFilter={statusFilter}
            states={states}
            onSearch={handleSearch}
            onStateChange={handleStateChange}
            onStatusChange={handleStatusChange}
            onPageChange={setCurrentPage}
            onPageSizeChange={handlePageSizeChange}
            onAddSchool={() => setShowAddModal(true)}
            onViewSchool={setSelectedSchool}
          />

          <SchoolSidebar
            schools={schools}
            activeSchools={activeSchools}
            inactiveSchools={inactiveSchools}
            onViewReport={() => setShowReport(true)}
            onViewStates={() => setShowStates(true)}
            onViewSchool={setSelectedSchool}
          />
        </div>
      </div>

      {showAddModal && (
        <AddSchoolModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddSchool}
          states={states.filter((state) => state !== "All States")}
        />
      )}

      {selectedSchool && (
        <div className="school-view-overlay">
          <div className="school-view-modal">
            <button
              className="school-modal-close"
              onClick={() => setSelectedSchool(null)}
            >
              ×
            </button>

            <div className="school-view-header">
              <div className="school-view-logo">{selectedSchool.shortName}</div>

              <div>
                <h2>{selectedSchool.name}</h2>
                <p>{selectedSchool.code}</p>
              </div>
            </div>

            <div className="school-view-grid">
              <div>
                <span>State</span>
                <strong>{selectedSchool.state}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedSchool.status}</strong>
              </div>

              <div>
                <span>Total Applications</span>
                <strong>{selectedSchool.applications}</strong>
              </div>

              <div>
                <span>Total Users</span>
                <strong>{selectedSchool.users}</strong>
              </div>

              <div>
                <span>Total Revenue</span>
                <strong>₦{selectedSchool.revenue.toLocaleString()}</strong>
              </div>

              <div>
                <span>Date Added</span>
                <strong>{selectedSchool.date}</strong>
              </div>
            </div>

            <button
              className="school-modal-primary-btn"
              onClick={() => setSelectedSchool(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showReport && (
        <div className="school-view-overlay">
          <div className="school-view-modal report-modal">
            <button
              className="school-modal-close"
              onClick={() => setShowReport(false)}
            >
              ×
            </button>

            <h2>Schools Status Report</h2>
            <p className="report-description">
              Overview of all schools currently registered on the platform.
            </p>

            <div className="report-stat-row">
              <div>
                <span>Total Schools</span>
                <strong>{schools.length}</strong>
              </div>

              <div>
                <span>Active Schools</span>
                <strong>{activeSchools}</strong>
              </div>

              <div>
                <span>Inactive Schools</span>
                <strong>{inactiveSchools}</strong>
              </div>
            </div>

            <button
              className="school-modal-primary-btn"
              onClick={() => setShowReport(false)}
            >
              Close Report
            </button>
          </div>
        </div>
      )}

      {showStates && (
        <div className="school-view-overlay">
          <div className="school-view-modal states-modal">
            <button
              className="school-modal-close"
              onClick={() => setShowStates(false)}
            >
              ×
            </button>

            <h2>All States</h2>

            <div className="all-states-list">
              {states
                .filter((state) => state !== "All States")
                .map((state) => {
                  const count = schools.filter(
                    (school) => school.state === state,
                  ).length;

                  return (
                    <div className="state-list-item" key={state}>
                      <span>{state}</span>
                      <strong>{count}</strong>
                    </div>
                  );
                })}
            </div>

            <button
              className="school-modal-primary-btn"
              onClick={() => setShowStates(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
