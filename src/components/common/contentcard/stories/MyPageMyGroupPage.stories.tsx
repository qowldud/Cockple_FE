import type { Meta, StoryObj } from '@storybook/react';
import { MyPageMyGroupPage } from '../../../../pages/mypage/MyPageMyGroupPage';
import { MemoryRouter } from 'react-router-dom'; 
import Kitty from "../../../../assets/images/kitty.png"; 

const meta: Meta<typeof MyPageMyGroupPage> = {
  title: 'Pages/MyPage/MyGroupPage', 
  component: MyPageMyGroupPage, 
  parameters: {
    layout: 'fullscreen', 
  },
  tags: ['autodocs'], // 자동문서
  argTypes: {
    groups: {
      description: '표시할 모임 목록이에요!',
      control: 'object',
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter> 
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

// 🌟 그룹이 여러 개 있을 때의 모습이야!
export const Default: StoryObj<typeof MyPageMyGroupPage> = {
  args: {
    groups: [
      {
        title: '신나는 배드민턴 모임',
        location: '강남구',
        femaleLevel: '초급',
        maleLevel: '중급',
        summary: '배드민턴으로 스트레스 날려버릴 사람 모여라!',
        imageSrc: Kitty, 
        isFavorite: true,
      },
      {
        title: '주말 등산 크루',
        location: '북한산',
        femaleLevel: '상급',
        maleLevel: '상급',
        summary: '주말에 함께 산을 오르며 건강도 챙기고 힐링도 해요!',
        imageSrc: Kitty, 
        isFavorite: false,
      },
      {
        title: '독서 토론 클럽',
        location: '홍대입구',
        femaleLevel: '제한 없음',
        maleLevel: '제한 없음',
        summary: '매주 흥미로운 책을 읽고 생각을 나누는 모임이에요.',
        imageSrc: Kitty, 
        isFavorite: false,
      },
    ],
  },
};

// 😥 그룹이 하나도 없을 때의 모습이야!
export const EmptyGroups: StoryObj<typeof MyPageMyGroupPage> = {
  args: {
    groups: [], // 텅 비어있지?
  },
};