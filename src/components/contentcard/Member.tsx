import ProfileImage from "../../assets/icons/ProfileImage.svg?react";
import Prohibition from "../../assets/icons/prohibition.svg?react";
import Star  from "../../assets/icons/star.svg?react";
import Female from "../../assets/icons/female.svg?react";
import Message from "../../assets/icons/message.svg?react";

export const Member = () => {
  return (
    <>
{/* 참여중일 때 */}
    <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
      <p className="body-md-500 ">No. 00</p>
      <ProfileImage className="w-[40px] h-[40px]" />

      {/* 이름, 등급, 성별 정보 */}
      <div className="flex flex-col justify-center gap-[4px] w-[156px] h-[44px]">
        <div className="flex items-center gap-1">
          <p className="header-h5 text-black">김셰익스피어</p>
          <Star className="w-[16px] h-[16px]" />
        </div>

        <div className="flex items-center gap-[4px] body-sm-500">
            <Female className="w-[16px] h-[16px]" />
            <p className="whitespace-nowrap">전국 D조</p>
            <span className="text-[#D6DAE0]">|</span>
            <p className="truncate overflow-hidden whitespace-nowrap max-w-[100px]">
                김알렉산드라 게스트
            </p>
        </div>
      </div>

      <Prohibition className="w-[32px] h-[32px] ml-auto" />
    </div>

{/* 대기중일 때 */}
    <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
      <p className="body-md-500">대기00</p>
      <ProfileImage className="w-[40px] h-[40px]" />

      {/* 이름, 등급, 성별 정보 */}
      <div className="flex flex-col justify-center gap-[4px] w-[156px] h-[44px]">
        <div className="flex items-center gap-1">
          <p className="header-h5 text-black">김셰익스피어</p>
        </div>

        <div className="flex items-center gap-[4px] body-sm-500">
            <Female className="w-[16px] h-[16px]" />
            <p className="whitespace-nowrap">전국 D조</p>
            <span className="text-[#D6DAE0]">|</span>
            <p className="truncate overflow-hidden whitespace-nowrap max-w-[100px]">
                김알렉산드라 게스트
            </p>
        </div>
      </div>

      <Prohibition className="w-[32px] h-[32px] ml-auto" />
    </div>


{/* 초대할 때 */}
    <div className="w-[343px] h-[76px] bg-white rounded-[16px] px-4 py-2 flex items-center gap-3">
        <ProfileImage className="w-[40px] h-[40px]" />
      {/* 이름, 등급, 성별 정보 */}
      <div className="flex flex-col justify-center gap-[4px] w-[156px] h-[44px]">
        <div className="flex items-center gap-1">
          <p className="header-h5 text-black">김셰익스피어</p>
        </div>

        <div className="flex items-center gap-[4px] body-sm-500">
            <Female className="w-[16px] h-[16px]" />
            <p className="whitespace-nowrap">전국 D조</p>
        </div>
      </div>

      <Message className="w-[32px] h-[32px] ml-auto" />
    </div>
    
  
{/* 요청할 때 */}
    <div className="w-[343px] h-[120px] ounded-[16px] bg-white p-4 space-y-3">
      {/* 상단 정보 영역 */}
      <div className="flex items-center gap-3">
        <ProfileImage className="w-[40px] h-[40px]" />

        <div className="flex flex-col justify-center gap-[4px] w-[247px] h-[44px]">
          <div className="flex items-center gap-1">
           <p className="header-h5 text-black">김셰익스피어</p>
          </div>

        <div className="flex justify-between items-center w-full body-sm-500 text-[#767B89]">
            <div className="flex items-center gap-[4px]">
                <Female className="w-[16px] h-[16px]" />
                <p className="whitespace-nowrap">전국 D조</p>
            </div>
            <p className="whitespace-nowrap">2000.05.05</p>
        </div>

        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="flex items-center  gap-2">
        <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg border border-[#F62D2D] text-[#F62D2D] ">
          거절
        </button>
        <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg bg-[#0B9A4E] text-white ">
          수락
        </button>
      </div>
    </div>


     
  
{/* 요청 승인될 때 */}
    <div className="w-[343px] h-[120px] rounded-[16px] bg-white p-4 space-y-3">
      {/* 상단 정보 영역 */}
      <div className="flex items-center gap-3">
        <ProfileImage className="w-[40px] h-[40px]" />

        <div className="flex flex-col justify-center gap-[4px] w-[247px] h-[44px]">
          <div className="flex items-center gap-1">
           <p className="header-h5 text-black">김셰익스피어</p>
          </div>

        <div className="flex justify-between items-center w-full body-sm-500 text-[#767B89]">
            <div className="flex items-center gap-[4px]">
                <Female className="w-[16px] h-[16px]" />
                <p className="whitespace-nowrap">전국 D조</p>
            </div>
            <p className="whitespace-nowrap">2000.05.05</p>
        </div>

        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="flex items-center  gap-2">
        <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg border border-[#C0C4CD] text-[#C0C4CD] ">
          거절
        </button>
        <button className="w-[151.5px] h-[32px] px-3 py-1 rounded-lg bg-[#C0C4CD] text-white ">
          수락
        </button>
      </div>
    </div>
    </>
       
  );
};
