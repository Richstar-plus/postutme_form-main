import { useMemo, useState, useEffect } from "react";
import "./Transactions.css";

import {
  faSearch,
  faDownload,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { transactions } from "../../data/transactions";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("All Services");
  const [status, setStatus] = useState("All Status");
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const rowsPerPage = 5;

  const filteredData = useMemo(() => {
    return transactions.filter((item) => {
      const searchMatch =
        item.applicant
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const serviceMatch =
        service === "All Services" ||
        item.service === service;

      const statusMatch =
        status === "All Status" ||
        item.status === status;

      return (
        searchMatch &&
        serviceMatch &&
        statusMatch
      );
    });
  }, [search, service, status]);

  const exportCSV = () => {
    const headers = [
      "Transaction ID",
      "Applicant",
      "Email",
      "Service",
      "Amount",
      "Provider",
      "Status",
    ];

    const rows = filteredData.map(
      (item) => [
        item.id,
        item.applicant,
        item.email,
        item.service,
        item.amount,
        item.provider,
        item.status,
      ]
    );

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.join(",")
      ),
    ].join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      "transactions.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  const totalPages = Math.ceil(
    filteredData.length / rowsPerPage
  );

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

      useEffect(() => {
      setPage(1);
    }, [search, service, status]);

    const handleSelectRow = (id) => {
      setSelectedRows((prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
      );
    };

    const handleSelectAll = () => {
      const currentPageIds = paginatedData.map(
        (item) => item.id
      );

      const allSelected = currentPageIds.every(
        (id) => selectedRows.includes(id)
      );

      if (allSelected) {
        setSelectedRows(
          selectedRows.filter(
            (id) => !currentPageIds.includes(id)
          )
        );
      } else {
        setSelectedRows([
          ...new Set([
            ...selectedRows,
            ...currentPageIds,
          ]),
        ]);
      }
    };

    const handleView = (transaction) => {
      alert(`
    Transaction ID: ${transaction.id}

    Applicant: ${transaction.applicant}

    Service: ${transaction.service}

    Amount: ₦${transaction.amount.toLocaleString()}

    Status: ${transaction.status}
      `);
    };
  

  return (
    <div className="transactions-container">
      <div className="transactions-toolbar">
        <div className="transactions-search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search by name, email, ref or transaction ID..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <select
          value={service}
          onChange={(e) =>
            setService(e.target.value)
          }
        >
          <option>All Services</option>
          <option>Post UTME Registration</option>
          <option>JAMB O'Level Upload</option>
          <option>Birth Certificate</option>
        </select>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>All Status</option>
          <option>Successful</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>

        <div className="date-picker">
          May 1, 2024 - May 31, 2024
        </div>

        <button
          className="export-btn"
          onClick={exportCSV}
        >
          <FontAwesomeIcon icon={faDownload} />
          Export
        </button>
      </div>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Transaction ID</th>
            <th>Applicant</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={
                    paginatedData.length > 0 &&
                    paginatedData.every((item) =>
                      selectedRows.includes(item.id)
                    )
                  }
                  onChange={handleSelectAll}
                />
              </td>

              <td className="trx-id">
                {item.id}
              </td>

              <td>
                <div className="applicant-info">
                  <div
                    className="avatar"
                    style={{
                      background:
                        item.avatarColor,
                    }}
                  >
                    {item.avatar}
                  </div>

                  <div>
                    <h5>{item.applicant}</h5>
                    <span>{item.email}</span>
                  </div>
                </div>
              </td>

              <td>
                <div className="service-pill">
                  <span
                    className="service-dot"
                    style={{
                      background:
                        item.serviceColor,
                    }}
                  />
                  {item.service}
                </div>
              </td>

              <td>
                ₦{item.amount.toLocaleString()}
              </td>

              <td>
                <span
                  className={`status-badge ${item.status.toLowerCase()}`}
                >
                  {item.status}
                </span>
              </td>

              <td>
                <div className="date-time">
                  <span>{item.date}</span>
                  <small>{item.time}</small>
                </div>
              </td>

              <td>
                <button
                  className="view-btn"
                  onClick={() =>
                    handleView(item)
                  }
                >
                  View
                  <FontAwesomeIcon
                    icon={faChevronDown}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <div>
          Showing{" "}
          {filteredData.length === 0
            ? 0
            : (page - 1) * rowsPerPage + 1}
          {" "}to{" "}
          {Math.min(
            page * rowsPerPage,
            filteredData.length
          )}
          {" "}of {filteredData.length} results
        </div>

        <div className="transaction-pagination-controls">
          <button
            disabled={page === 1}
            onClick={() =>
              setPage(page - 1)
            }
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
            />
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                key={index + 1}
                className={
                  page === index + 1
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setPage(index + 1)
                }
              >
                {index + 1}
              </button>
            )
          )}

          <button
            disabled={page === totalPages}
            onClick={() =>
              setPage(page + 1)
            }
          >
            <FontAwesomeIcon
              icon={faChevronRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
}