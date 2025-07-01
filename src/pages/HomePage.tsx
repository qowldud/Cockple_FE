import { Footer } from "../components/common/Footer";
import { MainHeader } from "../components/common/header/MainHeader";
import { PageHeader } from "../components/common/header/PageHeader";
import { Navbar } from "../components/common/navbar/Navbar";
import { SocialLoginBtn } from "../components/common/SocialLoginBtn";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center  header-h4">
      Home Page 입니다.
      <MainHeader hasNotification={true} />
      <PageHeader title="Pages" />
      <Footer />
      <SocialLoginBtn />
      <Navbar />
    </div>
  );
};
