import Transactions from "./Transactions";
import PaymentSummary from "./PaymentSummary";
import RecentPaymentActivities from "./RecentPaymentActivities";

export function Payments() {
  return (
<div className="payment-dashboard-layout">
  <div className="payment-left">
    <Transactions />
  </div>

  <div className="payment-right">
    <PaymentSummary />
    <RecentPaymentActivities />
  </div>
</div>
  )
}

