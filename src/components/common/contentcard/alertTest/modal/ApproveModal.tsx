import Btn_Static from "../../../Btn_Static/Btn_Static";

//아이콘
import Dismiss from "../../../../../assets/icons/dismiss.svg";
import Success from "../../../../../assets/icons/success.svg";
import GR600_S from "../../../Btn_Static/Text/GR600_S";

interface ApproveModalProps {
  onClose: () => void;
  onApprove: () => void;
  memberName?: string; // 이름이 있을 경우만 커스터마이징
}

const ApproveModal = ({
  onClose,
  onApprove,
  memberName,
}: ApproveModalProps) => {
  return (
    <div className="flex flex-col bg-white border-round p-3 w-[21.4375rem] shadow-ds300">
      <div className="flex w-[19.9375rem] justify-between items-center">
        <div className="w-4 h-4 shrink-0 aspect-square"></div>
        <Btn_Static
          iconMap={{
            disabled: Dismiss,
            default: Dismiss,
            pressing: Dismiss,
            clicked: Dismiss,
          }}
          bgColor="bg-white"
          width="w-6"
          height="h-6"
          onClick={onClose}
        />
      </div>

      {/*본문 영역*/}
      <div className="flex flex-col items-center gap-2">
        <img
          src={Success}
          alt="승인 아이콘"
          className="w-8 h-8 aspect-square"
        />
        {/*제목*/}
        {/* <p className="header-h4 text-black">모임 초대를 승인하시겠어요?</p> */}
        {memberName ? (
          <p className="header-h4 text-black">
            ‘{memberName}’님을 승인하시겠어요?
          </p>
        ) : (
          <p className="header-h4 text-black">모임 초대를 승인하시겠어요?</p>
        )}

        {/* 설명 */}
        <p className="flex flex-col items-center body-rg-500">
          {/* 모임 초대를 승인하고 */}
          {memberName ? "모임 멤버로 승인하고" : "모임 초대를 승인하고"}
          <br />
          다같이 배드민턴 모임을 즐겨봐요!
        </p>
        <GR600_S label="승인하기" onClick={onApprove} />
      </div>
    </div>
  );
};

export default ApproveModal;
