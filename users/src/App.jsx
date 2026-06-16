import { RouterProvider, createBrowserRouter } from "react-router-dom";
// User routes
import { RootLayout } from "./pages/Root";
import HomePage from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";
import ErrorPage from "./pages/ErrorPage";
import { FormRootLayout } from "./pages/FormRootLayout";
import { FirstSitting } from "./pages/FirstSitting";
import { PaymentPage } from "./pages/PaymentPage";
import { ReviewPage } from "./pages/ReviewPage";
import { WaecResultUpload } from "./pages/WaecResultUpload";
import { ChangeOfCourseInstitution } from "./pages/ChangeOfCourseInstitution";
import { AdmissionStatus } from "./pages/AdmissionStatus";
import { JambAdmissionLetter } from "./pages/JambAdmissionLetter";
import { JambOriginalResult } from "./pages/JambOriginalResult";
import { AgeDeclarationBirthCertificate } from "./pages/AgeDeclarationBirthCertificate";
import LocalGovernmentIdentificationLetter from "./pages/LocalGovernmentIdentificationLetter";

// Admin routes
import { AdminRoot } from "./admin/pages/Root";
import { AdminHome } from "./admin/pages/HomePage";
import AdminErrorPage from "./admin/pages/ErrorPage";

const router = createBrowserRouter([
  // User routes
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "waec-result-upload",
        element: <WaecResultUpload />,
      },
      {
        path: "change-course-institution",
        element: <ChangeOfCourseInstitution />,
      },
      {
        path: "admission-status",
        element: <AdmissionStatus />,
      },
      {
        path: "jamb-admission-letter",
        element: <JambAdmissionLetter />,
      },
      {
        path: "jamb-original-result",
        element: <JambOriginalResult />,
      },
      {
        path: "age-declaration-birth-certificate",
        element: <AgeDeclarationBirthCertificate />,
      },
      {
        path: "local-government-identification-letter",
        element: <LocalGovernmentIdentificationLetter />,
      },
      {
        path: "post-utme",
        element: <FormRootLayout />,
        children: [
          {
            index: true,
            element: <FormPage />,
          },
          {
            path: "payment",
            element: <PaymentPage />,
          },
          {
            path: "review",
            element: <ReviewPage />,
          },
          {
            path: ":id",
            id: "first-sitting-id",
            element: <FirstSitting />,
          },
        ],
      },
    ],
  },

  // Admin routes
  {
    path: "/admin",
    element: <AdminRoot />,
    errorElement: <AdminErrorPage />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
