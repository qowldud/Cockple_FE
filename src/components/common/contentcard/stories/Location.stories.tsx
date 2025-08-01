import type { Meta, StoryObj } from "@storybook/react-vite";
import { Location } from "../Location";

const meta = {
  title: "Components/Location",
  component: Location,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isMainAddr: { control: "text", description: "메인 주소" },
    streetAddr: { control: "text", description: "서브 주소" },
    disabled: { control: "boolean", description: "비활성화 여부" },
    initialClicked: { control: "boolean", description: "초기 클릭 상태" },
    onClick: { action: "clicked", description: "클릭 이벤트 콜백" },
  },
} satisfies Meta<typeof Location>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isMainAddr: "메인 주소",
    streetAddr: "서브 주소",
    disabled: false,
    initialClicked: false,
  },
};

// 클릭된 상태
export const Clicked: Story = {
  args: {
    isMainAddr: "클릭된 메인 주소",
    streetAddr: "클릭된 서브 주소",
    disabled: false,
    initialClicked: true, // 초기 클릭 상태 true
  },
};

// 비활성화 상태 (클릭 불가)
export const Disabled: Story = {
  args: {
    isMainAddr: "비활성화된 메인 주소",
    streetAddr: "비활성화된 서브 주소",
    disabled: true,
    initialClicked: false,
  },
};

// 비활성화 + 초기 클릭 상태
export const DisabledAndClicked: Story = {
  args: {
    isMainAddr: "비활성화된 클릭 주소",
    streetAddr: "비활성화된 클릭 서브 주소",
    disabled: true,
    initialClicked: true,
  },
};

// 텍스트가 긴 경우 (줄바꿈이나 ellipsis 확인)
export const LongAddress: Story = {
  args: {
    isMainAddr: "아주아주아주아주아주아주아주아주 길고 긴 메인 주소입니다",
    streetAddr: "이것은 아주아주아주아주아주아주 긴 서브 주소입니다",
    disabled: false,
    initialClicked: false,
  },
};
