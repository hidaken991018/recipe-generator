import type { Meta, StoryObj } from '@storybook/react';

import { CommonButton } from './CommonButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CommonButton> = {
  title: 'Example/CommonButton',
  component: CommonButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const 人数: Story = {
  args: {
    text: 'レシピ作成',
  },
};
