import { useEffect, useMemo, useState } from "react";
import "./ServicesTable.css";

import ServicesToolbar from "./ServicesToolbar";
import ServiceRow from "./ServiceRow";
import servicesData from "./servicesData";

export default function ServicesTable() {
  const [services, setServices] = useState(servicesData);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All Status");

  const [selectedRows, setSelectedRows] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8;

  /* =====================================
      FILTER SERVICES
  ===================================== */

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.code.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All Status" || service.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [services, search, status]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, status]);
  /* =====================================
      PAGINATION
  ===================================== */

  const totalPages = Math.ceil(filteredServices.length / rowsPerPage);

  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  /* =====================================
      ROW SELECTION
  ===================================== */

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id],
    );
  };

  const toggleAll = () => {
    const currentIds = paginatedServices.map((service) => service.id);

    const everySelected = currentIds.every((id) => selectedRows.includes(id));

    if (everySelected) {
      setSelectedRows((prev) => prev.filter((id) => !currentIds.includes(id)));
    } else {
      setSelectedRows((prev) => [...new Set([...prev, ...currentIds])]);
    }
  };

  /* =====================================
      SERVICE ACTIONS
  ===================================== */

  const handleView = (service) => {
    alert(
      `Viewing Service

Name: ${service.name}

Code: ${service.code}

Price: ₦${service.price}

Orders: ${service.orders}`,
    );
  };

  const handleEdit = (service) => {
    alert(`Editing "${service.name}"`);
  };

  const handleDuplicate = (service) => {
    const copy = {
      ...service,
      id: Date.now(),
      name: `${service.name} (Copy)`,
      code: `${service.code}-COPY`,
    };

    setServices((prev) => [copy, ...prev]);
  };

  const handleToggleStatus = (id) => {
    setServices((prev) =>
      prev.map((service) => {
        if (service.id !== id) return service;

        return {
          ...service,
          status: service.status === "Active" ? "Inactive" : "Active",
        };
      }),
    );
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Delete this service?");

    if (!confirmed) return;

    setServices((prev) => prev.filter((service) => service.id !== id));

    setSelectedRows((prev) => prev.filter((row) => row !== id));
  };

  /* =====================================
      ADD NEW SERVICE
  ===================================== */

  const handleAddService = () => {
    const newService = {
      id: Date.now(),
      name: "New Service",
      code: `SERVICE-${Date.now()}`,
      category: "Other Services",
      price: 1000,
      orders: 0,
      status: "Active",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      color: "#22C55E",
      icon: "plus",
    };

    setServices((prev) => [newService, ...prev]);

    alert("New service added.");
  };

  /* =====================================
      EXPORT CSV
  ===================================== */

  const exportCSV = () => {
    const headers = [
      "Service",
      "Code",
      "Category",
      "Price",
      "Orders",
      "Status",
    ];

    const rows = filteredServices.map((service) => [
      service.name,
      service.code,
      service.category,
      service.price,
      service.orders,
      service.status,
    ]);

    const csv = [headers.join(","), ...rows.map((row) => row.join(","))].join(
      "\n",
    );

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "services.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };
  return (
    <div className="services-table-container">
      <ServicesToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        exportCSV={exportCSV}
        onAddService={handleAddService}
      />

      <table className="services-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={
                  paginatedServices.length > 0 &&
                  paginatedServices.every((service) =>
                    selectedRows.includes(service.id),
                  )
                }
                onChange={toggleAll}
              />
            </th>

            <th>Service</th>

            <th>Category</th>

            <th>Price</th>

            <th>Orders</th>

            <th>Status</th>

            <th>Created</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedServices.length === 0 ? (
            <tr>
              <td colSpan={8} className="no-services">
                No services found.
              </td>
            </tr>
          ) : (
            paginatedServices.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                selected={selectedRows.includes(service.id)}
                toggleRow={toggleRow}
                onView={handleView}
                onEdit={handleEdit}
                onDuplicate={handleDuplicate}
                onDelete={handleDelete}
                onToggleStatus={handleToggleStatus}
              />
            ))
          )}
        </tbody>
      </table>
      <div className="services-pagination">
        <div className="pagination-info">
          Showing{" "}
          {filteredServices.length === 0
            ? 0
            : (currentPage - 1) * rowsPerPage + 1}{" "}
          to {Math.min(currentPage * rowsPerPage, filteredServices.length)} of{" "}
          {filteredServices.length} services
        </div>

        <div className="pagination-controls">
          <button
            className="pagination-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="pagination-btn"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
