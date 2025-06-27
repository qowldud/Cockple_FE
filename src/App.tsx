import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ContentCardL } from "./components/ContentCardL";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    
  },
  //ContentCardL #2 연두
  {
    path: "/ContentCardL",
    element: <ContentCardL />,
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
