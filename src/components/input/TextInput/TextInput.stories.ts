import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextInput> = {
  title: 'Example/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const 料理名orジャンル: Story = {
  args: {
    label: '料理名 or ジャンル',
    placeholder: '例）和食、サバの味噌煮',
  },
};
