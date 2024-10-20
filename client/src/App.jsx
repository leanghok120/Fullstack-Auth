import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

function App() {
  return (
    <div
      className="absolute inset-0 bg-base-200"
      style={{
        backgroundImage: "url('/coffee-bean.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
        zIndex: 0,
      }}
    >
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
