import { useEffect, useMemo, useState } from "react";
import "./UsersTable.css";

import UsersToolbar from "./UsersToolbar";
import UserRow from "./UserRow";
import usersData from "./usersData";

export default function UsersTable() {
  const [users, setUsers] = useState(usersData);

  const [search, setSearch] = useState("");

  const [role, setRole] = useState("All Roles");

  const [status, setStatus] = useState("All Status");

  const [source, setSource] = useState("All Registration Source");

  const [selectedRows, setSelectedRows] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8;

  /* ----------------------------
      FILTER USERS
  ---------------------------- */

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchMatch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.includes(search);

      const roleMatch =
        role === "All Roles" || user.role === role;

      const statusMatch =
        status === "All Status" || user.status === status;

      const sourceMatch =
        source === "All Registration Source" ||
        user.source === source;

      return (
        searchMatch &&
        roleMatch &&
        statusMatch &&
        sourceMatch
      );
    });
  }, [users, search, role, status, source]);

  /* ----------------------------
      RESET PAGE
  ---------------------------- */

  useEffect(() => {
    setCurrentPage(1);
  }, [search, role, status, source]);

  /* ----------------------------
      PAGINATION
  ---------------------------- */

  const totalPages = Math.ceil(
    filteredUsers.length / rowsPerPage
  );

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  /* ----------------------------
      SELECT ROW
  ---------------------------- */

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((row) => row !== id)
        : [...prev, id]
    );
  };

  /* ----------------------------
      SELECT ALL
  ---------------------------- */

  const toggleAll = () => {
    const ids = paginatedUsers.map((u) => u.id);

    const everySelected = ids.every((id) =>
      selectedRows.includes(id)
    );

    if (everySelected) {
      setSelectedRows(
        selectedRows.filter(
          (id) => !ids.includes(id)
        )
      );
    } else {
      setSelectedRows([
        ...new Set([...selectedRows, ...ids]),
      ]);
    }
  };

  /* ----------------------------
      VIEW USER
  ---------------------------- */

  const handleView = (user) => {
    alert(
      `Viewing ${user.name}\n\nEmail: ${user.email}\nPhone: ${user.phone}`
    );
  };

  /* ----------------------------
      EDIT USER
  ---------------------------- */

  const handleEdit = (user) => {
    alert(`Editing ${user.name}`);
  };

  /* ----------------------------
      DELETE USER
  ---------------------------- */

  const handleDelete = (id) => {
    if (!window.confirm("Delete this user?")) return;

    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );

    setSelectedRows((prev) =>
      prev.filter((row) => row !== id)
    );
  };

  /* ----------------------------
      TOGGLE STATUS
  ---------------------------- */

  const handleToggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id !== id) return user;

        return {
          ...user,
          status:
            user.status === "Suspended"
              ? "Active"
              : "Suspended",
        };
      })
    );
  };

  /* ----------------------------
      EXPORT CSV
  ---------------------------- */

  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Role",
      "Registered",
      "Source",
      "Status",
    ];

    const rows = filteredUsers.map((u) => [
      u.name,
      u.email,
      u.phone,
      u.role,
      u.registered,
      u.source,
      u.status,
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download = "users.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="users-table-container">

      <UsersToolbar
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
        source={source}
        setSource={setSource}
        exportCSV={exportCSV}
      />

      <table className="users-table">

        <thead>

          <tr>

            <th>

              <input
                type="checkbox"
                checked={
                  paginatedUsers.length > 0 &&
                  paginatedUsers.every((u) =>
                    selectedRows.includes(u.id)
                  )
                }
                onChange={toggleAll}
              />

            </th>

            <th>User</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Registered</th>

            <th>Source</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {paginatedUsers.map((user) => (

            <UserRow
              key={user.id}
              user={user}
              selected={selectedRows.includes(user.id)}
              toggleRow={toggleRow}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleStatus={handleToggleStatus}
            />

          ))}

        </tbody>

      </table>

      <div className="users-pagination">

        <div>

          Showing{" "}

          {filteredUsers.length === 0
            ? 0
            : (currentPage - 1) * rowsPerPage + 1}

          {" "}to{" "}

          {Math.min(
            currentPage * rowsPerPage,
            filteredUsers.length
          )}

          {" "}of {filteredUsers.length} results

        </div>

        <div className="pagination-buttons">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((p) => p - 1)
            }
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, i) => (
              <button
                key={i}
                className={
                  currentPage === i + 1
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(i + 1)
                }
              >
                {i + 1}
              </button>
            )
          )}

          <button
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            onClick={() =>
              setCurrentPage((p) => p + 1)
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}