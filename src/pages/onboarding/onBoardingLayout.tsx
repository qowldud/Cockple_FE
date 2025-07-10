import { Outlet } from "react-router-dom";

const OnboardingLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white px-4 max-w-[444px] mx-auto">
      <Outlet />
    </div>
  );
};
export default OnboardingLayout;
