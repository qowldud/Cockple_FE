import Clear_M from "../../components/common/Btn_Static/Icon_Btn/Clear_M";

// 아이콘
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import { useNavigate } from "react-router-dom";
import Alert_Invite from "../../components/common/contentcard/alert_test/AlertInvite";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";
import { useState } from "react";
import type { BtnStatus } from "../../components/common/Btn_Static/types";

export const AlarmPage = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<BtnStatus>("default");
  return (
    <div>
      {/* 헤더 */}
      <div className="h-[3.5rem] flex items-center gap-3 shrink-0 bg-white">
        <Clear_M
          iconMap={{
            disabled: ArrowLeft,
            default: ArrowLeft,
            pressing: ArrowLeft,
            clicked: ArrowLeft,
          }}
          onClick={() => navigate("/home")}
        />
        <div className="header-h4">알림</div>
      </div>
      <Alert_Invite
        groupName="Group Name"
        alertText="Alert Text"
        imageSrc="src/assets/images/image.png"
        onAccept={() => console.log("승인!")}
        onReject={() => console.log("거절!")}
      />
      <Grad_GR400_L label="승인" />
    </div>
  );
};
