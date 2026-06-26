import "./PaymentSummary.css";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip
);

export default function PaymentSummary() {
  const data = {
    datasets: [
      {
        data: [97.1, 1.9, 1.0],
        backgroundColor: [
          "#4ADE80",
          "#F59E0B",
          "#FB7185",
        ],
        borderWidth: 0,
        cutout: "78%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="payment-summary-widget-card">
      <h3 className="payment-summary-widget-title">
        Payment Summary
      </h3>

      <div className="payment-summary-widget-content">
        <div className="payment-summary-widget-chart-wrapper">
          <Doughnut
            data={data}
            options={options}
          />

          <div className="payment-summary-widget-chart-center">
            <h2>₦24.56M</h2>
            <p>Total Payments</p>
          </div>
        </div>

        <div className="payment-summary-widget-legend">
          <div className="payment-summary-widget-legend-item">
            <div className="payment-summary-widget-legend-left">
              <span className="payment-summary-widget-dot payment-summary-widget-dot-successful" />
              <span>Successful</span>
            </div>

            <div className="payment-summary-widget-legend-right">
              <strong>₦23.84M</strong>
              <small>(97.1%)</small>
            </div>
          </div>

          <div className="payment-summary-widget-legend-item">
            <div className="payment-summary-widget-legend-left">
              <span className="payment-summary-widget-dot payment-summary-widget-dot-pending" />
              <span>Pending</span>
            </div>

            <div className="payment-summary-widget-legend-right">
              <strong>₦456.35K</strong>
              <small>(1.9%)</small>
            </div>
          </div>

          <div className="payment-summary-widget-legend-item">
            <div className="payment-summary-widget-legend-left">
              <span className="payment-summary-widget-dot payment-summary-widget-dot-failed" />
              <span>Failed</span>
            </div>

            <div className="payment-summary-widget-legend-right">
              <strong>₦262.30K</strong>
              <small>(1.0%)</small>
            </div>
          </div>
        </div>
      </div>

      <button className="payment-summary-widget-report-btn">
        View full report →
      </button>
    </div>
  );
}