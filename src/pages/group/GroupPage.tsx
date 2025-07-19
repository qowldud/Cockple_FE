import Clear_XS from "../../components/common/Btn_Static/Icon_Btn/Clear_XS";
import { MainHeader } from "../../components/common/system/header/MainHeader";
import ArrowRight from "@/assets/icons/arrow_right.svg";

const data = [];

export const GroupPage = () => {
  return (
    <div className="flex flex-col">
      <MainHeader />
      <div className="flex justify-between header-h4">
        내 모임 운동{" "}
        {/* {data && data.length > 0 && (
          <Clear_XS
            iconMap={{
              disabled: ArrowRight,
              default: ArrowRight,
              pressing: ArrowRight,
              clicked: ArrowRight,
            }}
          />
        )} */}
      </div>
    </div>
  );
};
