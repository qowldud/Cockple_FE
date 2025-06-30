import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ContentCardL } from "./components/contentcard/ContentCardL";
import { Group_M } from "./components/contentcard/Group_M";
import { Group_S } from "./components/contentcard/Group_S";

import { Exercise_M } from "./components/contentcard/Exercise_M";
import { Exercise_S } from "./components/contentcard/Exercise_S";
import { DailyExercise_S } from "./components/contentcard/DailyExercise_S";
import { MyMedal } from "./components/contentcard/MyMedal"
import { Member } from "./components/contentcard/Member"

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
    path: "/Exercise_S",
    element: <Exercise_S />,
  },
  {
    path: "/DailyExercise_S",
    element: <DailyExercise_S />,
  },
  {
    path: "/Group_M",
    element: <Group_M />,
  },
  {
    path: "/Group_S",
    element: <Group_S />,
  },
  {
    path: "/MyMedal",
    element: <MyMedal />,
  },
  {
    path: "/Member",
    element: <Member />,
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
