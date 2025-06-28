import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ContentCardL } from "./components/contentcard/ContentCardL";
import { Exercise_M } from "./components/contentcard/Exercise_M";
import { Group_M } from "./components/contentcard/Group_M";

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
  {
    path: "/Exercise_M",
    element: <Exercise_M />,
  },
  {
    path: "/Group_M",
    element: <Group_M />,
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
