function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9.5L12 5L21 9.5L12 14L3 9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 11.5V16C6 16 8.4 19 12 19C15.6 19 18 16 18 16V11.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M21 10V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ActiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 12L10.5 14.5L16 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InactiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M8 3H16L19 6V21H5V6L8 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L14 14M14 10L10 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ApplicationsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="3"
        width="14"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 8H15.5M8.5 12H15.5M8.5 16H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MiniChart({ type }) {
  return (
    <div className={`mini-chart ${type}`}>
      <svg viewBox="0 0 90 45" preserveAspectRatio="none">
        <path
          d="M2 38 C10 38 12 26 20 29 C28 32 29 18 37 21 C45 25 47 12 54 16 C62 20 65 8 72 13 C79 18 81 4 88 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle, type }) {
  return (
    <div className={`school-stat-card ${type}`}>
      <div className="stat-card-top">
        <div className="stat-icon">{icon}</div>

        <div className="stat-card-title">
          <span>{title}</span>
          <strong>{value}</strong>
        </div>
      </div>

      <div className="stat-card-bottom">
        <small>{subtitle}</small>
        <MiniChart type={type} />
      </div>
    </div>
  );
}

export default function SchoolStats({
  totalSchools,
  activeSchools,
  inactiveSchools,
}) {
  const activePercentage =
    totalSchools > 0
      ? ((activeSchools / totalSchools) * 100).toFixed(1)
      : "0.0";

  const inactivePercentage =
    totalSchools > 0
      ? ((inactiveSchools / totalSchools) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="school-stats-grid">
      <StatCard
        type="purple"
        title="Total Schools"
        value={totalSchools.toLocaleString()}
        subtitle="Across all states"
        icon={<GraduationIcon />}
      />

      <StatCard
        type="green"
        title="Active Schools"
        value={activeSchools.toLocaleString()}
        subtitle={`${activePercentage}% of total`}
        icon={<ActiveIcon />}
      />

      <StatCard
        type="orange"
        title="Inactive Schools"
        value={inactiveSchools.toLocaleString()}
        subtitle={`${inactivePercentage}% of total`}
        icon={<InactiveIcon />}
      />

      <StatCard
        type="blue"
        title="Total Applications"
        value="4,892"
        subtitle="Across all schools"
        icon={<ApplicationsIcon />}
      />
    </div>
  );
}
