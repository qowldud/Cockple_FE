import ProfileImage from "../../../assets/icons/ProfileImage.svg?react";
import Prohibition from "../../../assets/icons/prohibition.svg?react";
import StarIcon  from "../../../assets/icons/star_filled_GR.svg?react";
import Female from "../../../assets/icons/female.svg?react";
import Message from "../../../assets/icons/message.svg?react";

// 전체적인 UI 코드입니다. 만일 아래 실행중인 코드에 이상이 있다면 주석된 코드로 대체합니다.
// export const Member = () => {
//   return (
//     <>
// {/* 참여중일 때 */}
//     <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
//       <p className="body-md-500 ">No. 00</p>
//       <ProfileImage className="w-[40px] h-[40px]" />

//       {/* 이름, 등급, 성별 정보 */}
//       <div className="flex flex-col justify-center gap-[4px] w-[156px] h-[44px]">
//         <div className="flex items-center gap-1">
//           <p className="header-h5 text-black">김셰익스피어</p>
//           <StarIcon className="w-[16px] h-[16px]" />
//         </div>

//         <div className="flex items-center gap-[4px] body-sm-500">
//             <Female className="w-[16px] h-[16px]" />
//             <p className="whitespace-nowrap">전국 D조</p>
//             <span className="text-[#D6DAE0]">|</span>
//             <p className="truncate overflow-hidden whitespace-nowrap max-w-[100px]">
//                 김알렉산드라 게스트
//             </p>
//         </div>
//       </div>

//       <Prohibition className="w-[32px] h-[32px] ml-auto" />
//     </div>

// {/* 대기중일 때 */}
//     <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
//       <p className="body-md-500">대기00</p>
//       <ProfileImage className="w-[40px] h-[40px]" />

//       {/* 이름, 등급, 성별 정보 */}
//       <div className="flex flex-col justify-center gap-[4px] w-[156px] h-[44px]">
//         <div className="flex items-center gap-1">
//           <p className="header-h5 text-black">김셰익스피어</p>
//         </div>

//         <div className="flex items-center gap-[4px] body-sm-500">
//             <Female className="w-[16px] h-[16px]" />
//             <p className="whitespace-nowrap">전국 D조</p>
//             <span className="text-[#D6DAE0]">|</span>
//             <p className="truncate overflow-hidden whitespace-nowrap max-w-[100px]">
//                 김알렉산드라 게스트
//             </p>
//         </div>
//       </div>

//       <Prohibition className="w-[32px] h-[32px] ml-auto" />
//     </div>


// {/* 초대할 때 */}
//     <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
//         <ProfileImage className="w-[40px] h-[40px]" />
//       {/* 이름, 등급, 성별 정보 */}
//       <div className="flex flex-col justify-center gap-[4px] w-[156px] h-[44px]">
//         <div className="flex items-center gap-1">
//           <p className="header-h5 text-black">김셰익스피어</p>
//         </div>

//         <div className="flex items-center gap-[4px] body-sm-500">
//             <Female className="w-[16px] h-[16px]" />
//             <p className="whitespace-nowrap">전국 D조</p>
//         </div>
//       </div>

//       <Message className="w-[32px] h-[32px] ml-auto" />
//     </div>
    
  
// {/* 요청할 때 */}
//     <div className="w-[343px] h-[120px] ounded-[16px] bg-white p-4 space-y-3">
//       {/* 상단 정보 영역 */}
//       <div className="flex items-center gap-3">
//         <ProfileImage className="w-[40px] h-[40px]" />

//         <div className="flex flex-col justify-center gap-[4px] w-[247px] h-[44px]">
//           <div className="flex items-center gap-1">
//            <p className="header-h5 text-black">김셰익스피어</p>
//           </div>

//         <div className="flex justify-between items-center w-full body-sm-500 text-[#767B89]">
//             <div className="flex items-center gap-[4px]">
//                 <Female className="w-[16px] h-[16apx]" />
//                 <p className="whitespace-nowrap">전국 D조</p>
//             </div>
//             <p className="whitespace-nowrap">2000.05.05</p>
//         </div>

//         </div>
//       </div>

//       {/* 하단 버튼 영역 */}
//       <div className="flex items-center gap-2  body-sm-500">
//         <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg border border-[#F62D2D] text-[#F62D2D] ">
//           거절
//         </button>
//         <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg bg-[#0B9A4E] text-white ">
//           수락
//         </button>
//       </div>
//     </div>


     
  
// {/* 요청 승인될 때 */}
//     <div className="w-[343px] h-[120px] rounded-[16px] bg-white p-4 space-y-3">
//       {/* 상단 정보 영역 */}
//       <div className="flex items-center gap-3">
//         <ProfileImage className="w-[40px] h-[40px]" />

//         <div className="flex flex-col justify-center gap-[4px] w-[247px] h-[44px]">
//           <div className="flex items-center gap-1">
//            <p className="header-h5 text-black">김셰익스피어</p>
//           </div>

//         <div className="flex justify-between items-center w-full body-sm-500 text-[#767B89]">
//             <div className="flex items-center gap-[4px]">
//                 <Female className="w-[16px] h-[16px]" />
//                 <p className="whitespace-nowrap">전국 D조</p>
//             </div>
//             <p className="whitespace-nowrap">2000.05.05</p>
//         </div>

//         </div>
//       </div>

//       {/* 하단 버튼 영역 */}
//       <div className="flex items-center gap-2 body-sm-500">
//         <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg border border-[#C0C4CD] text-[#C0C4CD] ">
//           거절
//         </button>
//         <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg bg-[#C0C4CD] text-white ">
//           2000.05.06 승인 완료
//         </button>
//       </div>
//     </div>
//     </>
       
//   );
// };



// 타입 정의 -> 나중에 수정
type MemberStatus = "Participating" | "waiting" | "invite" | "request" | "approved";

interface MemberProps {
  status: MemberStatus;
  name: string;
  gender: "male" | "female";
  group: string;
  birth?: string;
  showStar?: boolean;
  isGuest?: boolean;
  onAccept?: () => void;
  onReject?: () => void;
}

// 공통 정보 컴포넌트
const MemberInfo = ({
  name,
  gender,
  group,
  isGuest = false,
  showStar = false,
}: {
  name: string;
  gender: "male" | "female";
  group: string;
  isGuest?: boolean;
  showStar?: boolean;
}) => {
  return (
    <div className="flex flex-col justify-center gap-[4px] w-[156px] h-[44px]">
      <div className="flex items-center gap-1">
        <p className="header-h5 text-black">{name}</p>
        {showStar && <StarIcon className="w-[16px] h-[16px]" />}
      </div>
      <div className="flex items-center gap-[4px] body-sm-500">
        <Female className="w-[16px] h-[16px]" />
        <p className="whitespace-nowrap">{group}</p>
        {isGuest && (
          <>
            <span className="text-[#D6DAE0]">|</span>
            <p className="truncate overflow-hidden whitespace-nowrap max-w-[100px]">
              게스트
            </p>
          </>
        )}
      </div>
    </div>
  );
};

// Member(main) 컴포넌트
export const Member = ({
  status,
  name,
  gender,
  group,
  birth,
  showStar,
  isGuest,
  onAccept,
  onReject,
}: MemberProps) => {
  const renderContent = () => {
    switch (status) {
      case "Participating":
        return (
          <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
            <p className="body-md-500">No. 00</p>
            <ProfileImage className="w-[40px] h-[40px]" />
            <MemberInfo {...{ name, gender, group, showStar, isGuest }} />
            <Prohibition className="w-[32px] h-[32px] ml-auto" />
          </div>
        );

      case "waiting":
        return (
          <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
            <p className="body-md-500">대기00</p>
            <ProfileImage className="w-[40px] h-[40px]" />
            <MemberInfo {...{ name, gender, group, isGuest }} />
            <Prohibition className="w-[32px] h-[32px] ml-auto" />
          </div>
        );

      case "invite":
        return (
          <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
            <ProfileImage className="w-[40px] h-[40px]" />
            <MemberInfo {...{ name, gender, group }} />
            <Message className="w-[32px] h-[32px] ml-auto" />
          </div>
        );

      case "request":
        return (
          <div className="w-[343px] h-[120px] rounded-[16px] bg-white p-4 space-y-3">
            <div className="flex items-center gap-3">
              <ProfileImage className="w-[40px] h-[40px]" />
              <div className="flex flex-col justify-center gap-[4px] w-[247px] h-[44px]">
                <div className="flex items-center gap-1">
                  <p className="header-h5 text-black">{name}</p>
                </div>
                <div className="flex justify-between items-center w-full body-sm-500 text-[#767B89]">
                  <div className="flex items-center gap-[4px]">
                    <Female className="w-[16px] h-[16px]" />
                    <p className="whitespace-nowrap">{group}</p>
                  </div>
                  <p className="whitespace-nowrap">{birth}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 body-sm-500">
              <button
                className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg border border-[#F62D2D] text-[#F62D2D]"
                onClick={onReject}
              >
                거절
              </button>
              <button
                className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg bg-[#0B9A4E] text-white"
                onClick={onAccept}
              >
                수락
              </button>
            </div>
          </div>
        );

      case "approved":
        return (
          <div className="w-[343px] h-[120px] rounded-[16px] bg-white p-4 space-y-3">
            <div className="flex items-center gap-3">
              <ProfileImage className="w-[40px] h-[40px]" />
              <div className="flex flex-col justify-center gap-[4px] w-[247px] h-[44px]">
                <div className="flex items-center gap-1">
                  <p className="header-h5 text-black">{name}</p>
                </div>
                <div className="flex justify-between items-center w-full body-sm-500 text-[#767B89]">
                  <div className="flex items-center gap-[4px]">
                    <Female className="w-[16px] h-[16px]" />
                    <p className="whitespace-nowrap">{group}</p>
                  </div>
                  <p className="whitespace-nowrap">{birth}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 body-sm-500">
              <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg border border-[#C0C4CD] text-[#C0C4CD]">
                거절
              </button>
              <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg bg-[#C0C4CD] text-white">
                {birth} 승인 완료
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};
// 임시 예제 상태별로 나눠야 합니다. -> 서버와 
export const MemberExamples = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-50">
      <Member
        status="Participating"
        name="김셰익스피어"
        gender="female"
        group="전국 D조"
        showStar={true}
        isGuest={true}
      />

      <Member
        status="waiting"
        name="이문세"
        gender="male"
        group="전국 A조"
      />

      <Member
        status="invite"
        name="홍길동"
        gender="male"
        group="전국 Z조"
      />

      <Member
        status="request"
        name="윤동주"
        gender="male"
        group="전국 B조"
        birth="1999.12.31"
        onAccept={() => alert("수락!")}
        onReject={() => alert("거절!")}
      />

      <Member
        status="approved"
        name="김소월"
        gender="female"
        group="전국 C조"
        birth="1995.01.01"
      />
    </div>
  );
};
