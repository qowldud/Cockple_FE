// 알림 더미데이터

// export type AlertType =
//   | "invite"
//   | "invite_accept"
//   | "invite_reject"
//   | "change"
//   | "simple";

// export interface AlertItem {
//   notificationId: number;
//   title: string;
//   content: string;
//   type: AlertType;
//   isRead: boolean;
//   imageSrc: string;
//   groupId: number; // 모임 이동시 필요
// }

import type { AlertItem } from "../../types/alert";

export const alertList: AlertItem[] = [
  {
    notificationId: 1,
    title: "민턴클로버",
    content: "07.03 (월) 운동이 수정되었습니다.",
    type: "change",
    isRead: false,
    imgKey: "src/assets/images/kitty.png",
    groupId: 1,
  },
  {
    notificationId: 2,
    title: "민턴클로버",
    content: "07.03 (월) 운동이 삭제되었어요!",
    type: "simple",
    isRead: false,
    imgKey: "src/assets/images/kitty.png",
    groupId: 2,
  },
  {
    notificationId: 3,
    title: "새로운 모임",
    content: "'민턴클로버' 모임에 초대받았습니다.",
    type: "invite",
    isRead: false,
    imgKey: "src/assets/images/kitty.png",
    groupId: 103,
  },
  {
    notificationId: 4,
    title: "민턴클로버",
    content: "모임 가입이 승인되었어요!",
    type: "change",
    isRead: false,
    imgKey: "src/assets/images/kitty.png",
    groupId: 104,
  },
  {
    notificationId: 5,
    title: "민턴클로버",
    content: "운동 참석으로 변경되었어요!",
    type: "change",
    isRead: false,
    imgKey: "src/assets/images/kitty.png",
    groupId: 105,
  },
  {
    notificationId: 6,
    title: "민턴클로버",
    content: "모임이 삭제되었어요!",
    type: "simple",
    isRead: false,
    imgKey: "src/assets/images/kitty.png",
    groupId: 106,
  },
  {
    notificationId: 7,
    title: "민턴클로버",
    content: "모임 정보가 수정되었어요!",
    type: "change",
    isRead: false,
    imgKey: "src/assets/images/kitty.png",
    groupId: 107,
  },
];
