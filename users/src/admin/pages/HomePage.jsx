import { AdminCard } from "../components/dashboard-components/AdminCard";
import {
  faUsers,
  faNairaSign,
  faBookBookmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import ApplicationsChart from "../components/dashboard-components/ApplicationsChart";
import { ApplicationCard } from "../components/dashboard-components/ApplicationsCard";
import PaymentSummaryCard from "../components/dashboard-components/PaymentSummaryCard";
import ServiceBreakDownCard from "../components/dashboard-components/ServiceBreakDownCard";
import QuickActionCard from "../components/dashboard-components/QuickActionCard";
export function AdminHome() {
  return (
    <>
      <section className="admin-card">
        <h2>Welcome to the admin panel</h2>
        <div className="card-holder">
          <AdminCard
            title="Total Applications"
            price="3,834"
            image={faUsers}
            className="first"
          />
          <AdminCard
            title="Total Revenue"
            price="48,834"
            image={faNairaSign}
            className="second"
          />

          <AdminCard
            title="Pending Applications"
            price="3,834"
            image={faBookBookmark}
            className="third"
          />

          <AdminCard
            title="Completed"
            price="3,834"
            image={faCircleCheck}
            className="fourth"
          />
        </div>
      </section>
      <section className="admin-card">
        <div className="charts-holder">
          <ApplicationsChart />
          <ApplicationCard />
          <PaymentSummaryCard />
        </div>
      </section>
      <section className="admin-card">
        <div className="bottom-cards">
          <ServiceBreakDownCard />
          <QuickActionCard />
        </div>
      </section>
    </>
  );
}
