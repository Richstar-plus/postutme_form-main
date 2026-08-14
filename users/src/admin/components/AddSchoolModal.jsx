import { useState } from "react";

export default function AddSchoolModal({ onClose, onAdd, states }) {
  const [form, setForm] = useState({
    name: "",
    code: "",
    state: states[0] || "",
    applications: "",
    users: "",
    revenue: "",
    status: "Active",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.code || !form.state) {
      setError("Please fill in all required fields.");
      return;
    }

    const now = new Date();

    const date = now.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    onAdd({
      name: form.name,
      code: form.code.toUpperCase(),
      state: form.state,
      applications: Number(form.applications) || 0,
      users: Number(form.users) || 0,
      revenue: Number(form.revenue) || 0,
      status: form.status,
      date,
      time,
      shortName: form.code.substring(0, 3).toUpperCase(),
    });
  };

  return (
    <div className="school-modal-overlay">
      <div className="add-school-modal">
        <button className="school-modal-close" type="button" onClick={onClose}>
          ×
        </button>

        <div className="add-school-heading">
          <h2>Add New School</h2>
          <p>Add a new institution to your school directory.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="school-form-group">
            <label>
              School Name <span>*</span>
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter school name"
            />
          </div>

          <div className="school-form-row">
            <div className="school-form-group">
              <label>
                School Code <span>*</span>
              </label>

              <input
                name="code"
                value={form.code}
                onChange={handleChange}
                placeholder="e.g. UNIPORT"
              />
            </div>

            <div className="school-form-group">
              <label>
                State <span>*</span>
              </label>

              <select name="state" value={form.state} onChange={handleChange}>
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="school-form-row">
            <div className="school-form-group">
              <label>Total Applications</label>

              <input
                type="number"
                name="applications"
                value={form.applications}
                onChange={handleChange}
                placeholder="0"
              />
            </div>

            <div className="school-form-group">
              <label>Total Users</label>

              <input
                type="number"
                name="users"
                value={form.users}
                onChange={handleChange}
                placeholder="0"
              />
            </div>
          </div>

          <div className="school-form-row">
            <div className="school-form-group">
              <label>Total Revenue</label>

              <input
                type="number"
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                placeholder="0"
              />
            </div>

            <div className="school-form-group">
              <label>Status</label>

              <select name="status" value={form.status} onChange={handleChange}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {error && <p className="school-form-error">{error}</p>}

          <div className="school-form-actions">
            <button
              type="button"
              className="school-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="school-submit-btn">
              Add School
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
