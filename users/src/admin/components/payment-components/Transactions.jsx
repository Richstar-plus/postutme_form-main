import { useMemo, useState } from "react";
import "./Transactions.css";

import {
  faSearch,
  faDownload,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const transactions = [
  {
    id: "TRX-240531-0001",
    applicant: "Adedayo Adekunle",
    email: "adedayo@gmail.com",
    service: "Post UTME Registration",
    amount: 2500,
    provider: "Flutterwave",
    status: "Successful",
    date: "May 31, 2024",
    time: "10:24 AM",
    avatar: "AA",
    avatarColor: "#E9D5FF",
    serviceColor: "#7C3AED",
  },
  {
    id: "TRX-240531-0002",
    applicant: "Blessing Okoro",
    email: "blessing@gmail.com",
    service: "JAMB O'Level Upload",
    amount: 1500,
    provider: "Paystack",
    status: "Successful",
    date: "May 31, 2024",
    time: "09:15 AM",
    avatar: "BO",
    avatarColor: "#DCFCE7",
    serviceColor: "#2563EB",
  },
  {
    id: "TRX-240530-0003",
    applicant: "Chinedu Michael",
    email: "chinedu@gmail.com",
    service: "Change of Institution/Course",
    amount: 2000,
    provider: "Flutterwave",
    status: "Pending",
    date: "May 30, 2024",
    time: "04:42 PM",
    avatar: "CM",
    avatarColor: "#DBEAFE",
    serviceColor: "#F59E0B",
  },
  {
    id: "TRX-240530-0004",
    applicant: "Fatima Sani",
    email: "fatima@gmail.com",
    service: "Birth Certificate",
    amount: 1200,
    provider: "Paystack",
    status: "Successful",
    date: "May 30, 2024",
    time: "02:31 PM",
    avatar: "FS",
    avatarColor: "#FCE7F3",
    serviceColor: "#EC4899",
  },
  {
    id: "TRX-240530-0005",
    applicant: "Ibrahim Okafor",
    email: "ibrahim@gmail.com",
    service: "JAMB Admission Status",
    amount: 700,
    provider: "Bank Transfer",
    status: "Successful",
    date: "May 30, 2024",
    time: "11:20 AM",
    avatar: "IO",
    avatarColor: "#CFFAFE",
    serviceColor: "#06B6D4",
  },
  {
    id: "TRX-240529-0006",
    applicant: "Patience Onuoha",
    email: "patience@gmail.com",
    service: "JAMB Admission Letter",
    amount: 1000,
    provider: "Flutterwave",
    status: "Failed",
    date: "May 29, 2024",
    time: "06:45 PM",
    avatar: "PO",
    avatarColor: "#FEF3C7",
    serviceColor: "#8B5CF6",
  },
  {
    id: "TRX-240529-0007",
    applicant: "Rukayat Usman",
    email: "rukayat@gmail.com",
    service: "JAMB Original Result",
    amount: 1500,
    provider: "Paystack",
    status: "Pending",
    date: "May 29, 2024",
    time: "03:18 PM",
    avatar: "RU",
    avatarColor: "#DBEAFE",
    serviceColor: "#06B6D4",
  },
];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("All Services");
  const [status, setStatus] = useState("All Status");
  const [page, setPage] = useState(1);

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
    const csv =
      "Transaction ID,Applicant,Service,Amount,Provider,Status\n" +
      filteredData
        .map(
          (item) =>
            `${item.id},${item.applicant},${item.service},${item.amount},${item.provider},${item.status}`
        )
        .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
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
            <th>Payment Method</th>
            <th>Status</th>
            <th>Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
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

              <td>{item.provider}</td>

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
                <button className="view-btn">
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
          Showing 1 to 7 of 256 results
        </div>

        <div className="pagination-controls">
          <button>
            <FontAwesomeIcon
              icon={faChevronLeft}
            />
          </button>

          <button className="active">
            1
          </button>

          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>37</button>

          <button>
            <FontAwesomeIcon
              icon={faChevronRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
}