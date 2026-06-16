import { AdminCard } from "../components/AdminCard";
import {
  faUsers,
  faNairaSign,
  faBookBookmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import ApplicationsChart from "../components/ApplicationsChart";
import { ApplicationCard } from "../components/ApplicationsCard";
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
        </div>
      </section>
    </>
  );
}
