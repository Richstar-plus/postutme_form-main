import "./Payment.css";

import { PaymentCard } from "../components/payment-components/PaymentCard";
import {Payments} from "../components/payment-components/Payment";

import {
  faWallet,
  faArrowDown,
  faClock,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export function Payment() {
  return (
    <div className="payment-container">
      <div className="application-nav-indicator">
        <p>Dashboard</p>
        <p>{">"}</p>
        <p>Payments</p>
      </div>

      <div className="payment-content-card-holder">
        <PaymentCard
          title="Total Payments"
          amount="₦24,560,850"
          percentage="18.7%"
          trend="up"
          icon={faWallet}
          iconColor="#8b5cf6"
          graphColor="#7c3aed"
        />

        <PaymentCard
          title="Successful Payments"
          amount="₦23,842,200"
          percentage="20.4%"
          trend="up"
          icon={faArrowDown}
          iconColor="#22c55e"
          graphColor="#22c55e"
        />

        <PaymentCard
          title="Pending Payments"
          amount="₦456,350"
          percentage="12.3%"
          trend="up"
          icon={faClock}
          iconColor="#f59e0b"
          graphColor="#f59e0b"
        />

        <PaymentCard
          title="Failed Payments"
          amount="₦262,300"
          percentage="8.5%"
          trend="down"
          icon={faCircleXmark}
          iconColor="#f43f5e"
          graphColor="#fb7185"
        />
      </div>
      <Payments />
      
    </div>
  );
}