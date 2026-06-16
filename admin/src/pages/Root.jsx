import { Outlet } from "react-router-dom";
import { SideBar } from "../components/Sidebar";

export function RootLayout() {
  // const navigation = useNavigation();
  return (
    <div className="app-container">
      <SideBar />
      <main className="app-main">
        <header>
          <h2>Dashboard</h2>
        </header>
        <Outlet />
      </main>
    </div>
  );
}
