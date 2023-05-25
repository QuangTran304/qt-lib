import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Library/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "contained",
    label: "Contained Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    label: "Outlined Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "contained",
    label: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "contained",
    label: "Small Button",
  },
};
