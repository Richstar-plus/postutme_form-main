import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { Header } from "../components/Header";
import "../App.css";

export function AdminRoot() {
  return (
    <div className="admin-container">
      <SideBar />
      <main className="admin-app-main">
        <Header />  
        <Outlet />
      </main>
    </div>
  );
}
