import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./PaymentSummaryCard.css";

const data = [
  {
    name: "Post UTME Reg.",
    value: 40.6,
    amount: "₦1.85M",
    color: "#5B4CF5",
  },
  {
    name: "O'level Upload",
    value: 26.3,
    amount: "₦1.20M",
    color: "#A855F7",
  },
  {
    name: "Change of Inst./Course",
    value: 17.1,
    amount: "₦780K",
    color: "#FF9F0A",
  },
  {
    name: "Birth Certificate",
    value: 9.2,
    amount: "₦420K",
    color: "#FF4DA6",
  },
  {
    name: "Others",
    value: 6.8,
    amount: "₦310K",
    color: "#48D597",
  },
];

export default function PaymentSummaryCard() {
  return (
    <div className="dashboard-payment-summary-card">
      <h3 className="dashboard-payment-summary-title">Payment Summary</h3>
      <div className="dashboard-payment-summary-content">
        <div className="dashboard-payment-summary-chart-wrapper">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={58}
                paddingAngle={0}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>

              {/* Center Text */}
              <text
                x="50%"
                y="47%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="dashboard-payment-summary-center-value"
              >
                ₦4.56M
              </text>

              <text
                x="50%"
                y="61%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="dashboard-payment-summary-center-label"
              >
                Total Revenue
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-payment-summary-legend">
          {data.map((item, index) => (
            <div className="dashboard-payment-summary-legend-item" key={index}>
              <span
                className="dashboard-payment-summary-legend-dot"
                style={{ backgroundColor: item.color }}
              ></span>

              <div>
                <div className="dashboard-payment-summary-legend-title">{item.name}</div>
                <div className="dashboard-payment-summary-legend-value">
                  {item.amount} ({item.value}%)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="dashboard-payment-summary-report-btn">
        View full report <span>→</span>
      </button>
    </div>
  );
}