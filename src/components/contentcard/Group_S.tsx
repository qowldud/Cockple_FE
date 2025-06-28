import Kitty from "../../assets/images/kitty.png";

export const Group_S = () => {
  return (
    <div className="p-[8px] w-[96px] h-[144px] rounded-[16px] bg-white flex flex-col items-center gap-3">
      {/* 몸짱키티 */}
      <div>
        <img
          src={Kitty} 
          alt="고양이"
          className="w-[80px] h-[80px] rounded-[8px] object-cover"
        />
      </div>
      {/* 글/정보 영역 */}
      <div className="flex flex-col gap-[4px] items-start s400 text-black">
        <p className="r500 text-[#C0C4CD]">민턴클로버</p>
        <p className="s300 text-[#C0C4CD]">경기도 / 성남시</p>
        {/* 글자색 - 검은색 */}
        <p className="r500">민턴클로버</p>
        <p className="s300">경기도 / 성남시</p>
      </div>
    </div>
  );
};
