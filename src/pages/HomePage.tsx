import { MainAppBar } from "../components/common/appbar/MainAppbar";
import { Navbar } from "../components/common/navbar/Navbar";

export const HomePage = () => {
  return (
    <div className="header-h4">
      Home Page 입니다.
      <MainAppBar hasNotification={true} />
      <Navbar />
    </div>
  );
};
