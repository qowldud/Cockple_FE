import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ContentCardL } from "./components/contentcard/ContentCardL";
import { Group_M } from "./components/contentcard/Group_M";
import { Group_S } from "./components/contentcard/Group_S";

import { Exercise_M } from "./components/contentcard/Exercise_M";
import { Exercise_S } from "./components/contentcard/Exercise_S";
import { DailyExercise_S } from "./components/contentcard/DailyExercise_S";
import { MyMedal } from "./components/contentcard/MyMedal";
import { MemberExamples } from "./components/contentcard/Member";
import { Location } from "./components/contentcard/Location";
import { LocationList } from "./components/contentcard/LocationList";
import { GroupChat } from "./components/contentcard/GroupChat";
import { PersonalChat } from "./components/contentcard/PersonalChat";
import { MyPage } from "./components/contentcard/MyPage";


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
    path: "/MemberExamples",
    element: <MemberExamples />,
  },
  // Location을 2개로 나누었습니다. 
  {
    path: "/Location",
    element: <Location />,
  },
  {
    path: "/LocationList",
    element: <LocationList />,
  },
  //chat 2가지 버전 나누었습니다.
  {
    path: "/GroupChat",
    element: <GroupChat />,
  },
  {
    path: "/PersonalChat",
    element: <PersonalChat />,
  },
  {
    path: "/MyPage",
    element: <MyPage />,
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
