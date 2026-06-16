import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
