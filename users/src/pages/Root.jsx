import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function RootLayout() {
  // const navigation = useNavigation();
  return (
    <div className="app-container">
      <header className="app-header">
        <Header />
      </header>
      <main className="app-main">
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}
