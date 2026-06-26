import "./ApplicationsChart.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { date: "May 1", applications: 50 },
  { date: "May 4", applications: 220 },
  { date: "May 7", applications: 380 },
  { date: "May 10", applications: 250 },
  { date: "May 13", applications: 590 },
  { date: "May 16", applications: 310 },
  { date: "May 19", applications: 682 },
  { date: "May 22", applications: 620 },
  { date: "May 25", applications: 410 },
  { date: "May 28", applications: 520 },
  { date: "May 31", applications: 780 },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="applications-chart-tooltip">
        <div className="applications-chart-tooltip-date">{label}</div>

        <div className="applications-chart-tooltip-value">
          <span className="applications-chart-tooltip-number">
            {payload[0].value}
          </span>

          <span className="applications-chart-tooltip-text">
            Applications
          </span>
        </div>
      </div>
    );
  }

  return null;
}

export default function ApplicationsChart() {
  return (
    <div className="applications-chart-card">
      <div className="applications-chart-header">
        <h3>Applications Overview</h3>

        <select className="applications-chart-select">
          <option>This Month</option>
        </select>
      </div>

      <div className="applications-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6C3BFF" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#6C3BFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[0, 1000]}
              ticks={[0, 250, 500, 750, 1000]}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#E5E7EB",
                strokeWidth: 1,
              }}
            />

            <Area
              type="monotone"
              dataKey="applications"
              stroke="#6C3BFF"
              strokeWidth={4}
              fill="url(#purpleGradient)"
              dot={{
                fill: "#6C3BFF",
                stroke: "#fff",
                strokeWidth: 3,
                r: 5,
              }}
              activeDot={{
                fill: "#6C3BFF",
                stroke: "#fff",
                strokeWidth: 4,
                r: 7,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}