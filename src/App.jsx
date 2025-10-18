import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import LoanPage from "./Pages/LoanPage";
import { LoaderProvider } from "./context/LoaderContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/loan",
          element: <LoanPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <LoaderProvider>
        <RouterProvider router={router} />
      </LoaderProvider>
    </>
  );
}

export default App;
