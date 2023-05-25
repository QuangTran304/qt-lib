import type { Meta, StoryObj } from "@storybook/react";
import { TeamMember } from "../../components";

const meta = {
  title: "Library/TeamMember",
  component: TeamMember,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TeamMember>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John Doe",
    title: "Software Engineer",
    photo: "https://via.placeholder.com/240",
  },
};
