import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const Default: Story = {
  args: {
    label: "Button",
  },
};
