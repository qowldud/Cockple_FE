import type { Meta, StoryObj } from '@storybook/react';
import { MyPage } from '../../../../pages/mypage/MyPage';

import ProfileDefaultImage from "../../../../assets/images/Profile_Image.png"; 

const meta = {
  title: 'Pages/MyPage',
  component: MyPage, 
  parameters: {
    layout: 'padded', 
  },
  tags: ['autodocs'], 
  argTypes: {
    name: { control: 'text', description: '사용자 이름' },
    gender: { control: 'text', description: '성별' },
    group: { control: 'text', description: '소속 그룹/레벨' },
    birth: { control: 'text', description: '생년월일' },
    imageSrc: { control: 'text', description: '프로필 이미지 URL' },
    totalMedalsCount: { control: 'number', description: '총 메달 개수' },
    goldMedals: { control: 'number', description: '금메달 개수' },
    silverMedals: { control: 'number', description: '은메달 개수' },
    bronzeMedals: { control: 'number', description: '동메달 개수' },
    disabled: { control: 'boolean', description: '페이지 전체 비활성화 여부' },
  },
} satisfies Meta<typeof MyPage>;

export default meta;
type Story = StoryObj<typeof meta>;


// 기본 사용자 프로필 (메달 포함)
export const DefaultUser: Story = {
  args: {
    name: "김알렉산드라",
    gender: "female",
    group: "전국 D조",
    birth: "2000.03.12",
    imageSrc: ProfileDefaultImage, 
    totalMedalsCount: 3,
    goldMedals: 1,
    silverMedals: 1,
    bronzeMedals: 1,
    disabled: false,
  },
};

// 메달이 없는 사용자 프로필
export const UserNoMedals: Story = {
  args: {
    ...DefaultUser.args,
    totalMedalsCount: 0, 
    goldMedals: 0,
    silverMedals: 0,
    bronzeMedals: 0,
  },
};

// 모든 항목이 비활성화된 상태의 사용자 프로필
export const DisabledUser: Story = {
  args: {
    ...DefaultUser.args,
    name: "비활성화된 사용자",
    disabled: true, // 페이지 전체 비활성화
  },
};

