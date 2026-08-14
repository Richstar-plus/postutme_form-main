function DonutChart({ active, inactive, total }) {
  const activePercentage = total > 0 ? (active / total) * 100 : 0;

  return (
    <div
      className="school-donut"
      style={{
        "--active-percentage": `${activePercentage}%`,
      }}
    >
      <div className="school-donut-inner">
        <strong>{total}</strong>
        <span>Total Schools</span>
      </div>
    </div>
  );
}

function getTopStates(schools) {
  const stateCounts = {};

  schools.forEach((school) => {
    stateCounts[school.state] = (stateCounts[school.state] || 0) + 1;
  });

  return Object.entries(stateCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
}

export default function SchoolSidebar({
  schools,
  activeSchools,
  inactiveSchools,
  onViewReport,
  onViewStates,
  onViewSchool,
}) {
  const topStates = getTopStates(schools);

  const maxStateCount = Math.max(...topStates.map(([, count]) => count), 1);

  const recentSchools = [...schools].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="school-sidebar">
      <div className="sidebar-card status-card">
        <div className="sidebar-card-header">
          <h3>Schools by Status</h3>
        </div>

        <div className="status-chart-content">
          <DonutChart
            active={activeSchools}
            inactive={inactiveSchools}
            total={schools.length}
          />

          <div className="status-legend">
            <div className="legend-item">
              <span className="legend-dot active-dot"></span>

              <div>
                <strong>Active Schools</strong>
                <small>
                  {activeSchools} (
                  {schools.length
                    ? ((activeSchools / schools.length) * 100).toFixed(1)
                    : "0.0"}
                  %)
                </small>
              </div>
            </div>

            <div className="legend-item">
              <span className="legend-dot inactive-dot"></span>

              <div>
                <strong>Inactive Schools</strong>
                <small>
                  {inactiveSchools} (
                  {schools.length
                    ? ((inactiveSchools / schools.length) * 100).toFixed(1)
                    : "0.0"}
                  %)
                </small>
              </div>
            </div>
          </div>
        </div>

        <button className="sidebar-link" onClick={onViewReport} type="button">
          View full report
          <span>→</span>
        </button>
      </div>

      <div className="sidebar-card state-card">
        <div className="sidebar-card-header">
          <h3>Schools by State (Top 5) ↗</h3>
        </div>

        <div className="state-chart">
          {topStates.map(([state, count], index) => (
            <div className="state-bar-row" key={state}>
              <div className="state-bar-label">
                <span>{state}</span>
                <small>{count} schools</small>
              </div>

              <div className="state-bar-track">
                <div
                  className={`state-bar state-${index}`}
                  style={{
                    width: `${(count / maxStateCount) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <button className="sidebar-link" onClick={onViewStates} type="button">
          View all states
          <span>→</span>
        </button>
      </div>

      <div className="sidebar-card recently-card">
        <div className="sidebar-card-header">
          <h3>Recently Added Schools</h3>

          <button type="button" onClick={onViewStates}>
            View all
          </button>
        </div>

        <div className="recent-schools">
          {recentSchools.map((school) => (
            <button
              className="recent-school"
              key={school.id}
              type="button"
              onClick={() => onViewSchool(school)}
            >
              <div className="recent-school-logo">{school.shortName}</div>

              <div className="recent-school-info">
                <strong>{school.name}</strong>
                <span>{school.state}</span>
              </div>

              <div className="recent-school-date">
                <strong>{school.date}</strong>
                <span>{school.time}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
