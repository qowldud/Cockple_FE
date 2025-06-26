import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className="min-h-screen w-full  flex justify-center items-center">
      <div className="w-full min-h-screen max-w-[444px] bg-white">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
