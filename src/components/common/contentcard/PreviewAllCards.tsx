// 이 화면은 ContentCardL의 상태를 미리보기 위해 만들었습니다.  참고해주세욤
import { ContentCardL } from "./ContentCardL";

export const PreviewAllCards = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <p className="text-lg font-bold mb-2">1. 가입 X, 게스트 허용 O (운동 시작하기 버튼만)</p>
        <ContentCardL isUserJoined={false} isGuestAllowedByOwner={true} />
      </div>

      <div>
        <p className="text-lg font-bold mb-2">2. 가입 O, 게스트 허용 X (운동 시작하기 버튼만)</p>
        <ContentCardL isUserJoined={true} isGuestAllowedByOwner={false} />
      </div>

      <div>
        <p className="text-lg font-bold mb-2">3. 가입 O, 게스트 허용 O (운동 시작 + 게스트 초대)</p>
        <ContentCardL isUserJoined={true} isGuestAllowedByOwner={true} />
      </div>

      <div>
        <p className="text-lg font-bold mb-2">4. 가입 X, 게스트 허용 X (운동 시작하기 버튼만)</p>
        <ContentCardL isUserJoined={false} isGuestAllowedByOwner={false} />
      </div>
    </div>
  );
};
