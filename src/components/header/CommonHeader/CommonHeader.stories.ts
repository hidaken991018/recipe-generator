import type { Meta, StoryObj } from '@storybook/react';

import { CommonHeader } from './CommonHeader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CommonHeader> = {
  title: 'Example/CommonHeader',
  component: CommonHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonHeader>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const 人数: Story = {
  args: {
    label: '人数',
    placeholder: '例）2人前',
    choices: ['1人前', '2人前', '3人前', '4人前', '5人前', '6人前'],
  },
};
