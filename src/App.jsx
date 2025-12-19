import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/authectication/Login";
import NotFound from "./pages/shared/NotFound";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/authectication/ProtectedRoute";
import Services from "./pages/Services";
import DashboardWelcome from "./pages/DashboardWelcome";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <DashboardWelcome /> },
        { path: "services", element: <Services /> },
      ],
      errorElement: <NotFound />,
    },
  ]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
