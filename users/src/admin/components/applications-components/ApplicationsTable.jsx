import { useMemo, useState } from "react";
import "./ApplicationsTable.css";

import TableToolbar from "./TableToolbar";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

import applicationsData from "./mockData";

export default function ApplicationsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState("All Services");
  const [selectedSchool, setSelectedSchool] = useState("All Schools");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8;

  const filteredApplications = useMemo(() => {
    return applicationsData.filter((application) => {
      const searchMatch =
        application.applicantName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        application.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        application.reference
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const serviceMatch =
        selectedService === "All Services" ||
        application.service === selectedService;

      const schoolMatch =
        selectedSchool === "All Schools" ||
        application.school === selectedSchool;

      const statusMatch =
        selectedStatus === "All Statuses" ||
        application.status === selectedStatus;

      return (
        searchMatch &&
        serviceMatch &&
        schoolMatch &&
        statusMatch
      );
    });
  }, [
    searchTerm,
    selectedService,
    selectedSchool,
    selectedStatus,
  ]);

  const totalPages = Math.ceil(
    filteredApplications.length / rowsPerPage
  );

  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(
        paginatedApplications.map((item) => item.id)
      );
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(
        selectedRows.filter((rowId) => rowId !== id)
      );
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const exportCSV = () => {
    const headers = [
      "Applicant",
      "Email",
      "Phone",
      "Service",
      "School",
      "Reference",
      "Amount",
      "Status",
      "Submitted Date",
    ];

    const rows = filteredApplications.map((app) => [
      app.applicantName,
      app.email,
      app.phone,
      app.service,
      app.school,
      app.reference,
      app.amount,
      app.status,
      app.submittedDate,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "applications.csv";
    link.click();
  };

  return (
    <div className="applications-wrapper">

      <TableToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        exportCSV={exportCSV}
      />

      <div className="table-container">
        <table className="applications-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                />
              </th>

              <th>Applicant</th>
              <th>Service</th>
              <th>School</th>
              <th>Reference</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedApplications.map((application) => (
              <TableRow
                key={application.id}
                application={application}
                selected={selectedRows.includes(
                  application.id
                )}
                onSelect={handleSelectRow}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}