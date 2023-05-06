import Checkbox from './index';
import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/colors';

const meta: Meta<typeof Checkbox> = {
  title: 'im-helping/Button',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Вариант Disabled',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' },
      },
      options: ['false', 'true'],
    },
    isChecked: {
      name: 'isChecked',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Вариант Checked',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' },
      },
      options: ['false', 'true'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    isDisabled: false,
    isChecked: false,
  },
};

export const Checked: Story = {
  args: {
    isDisabled: false,
    isChecked: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    isDisabled: true,
    isChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isChecked: false,
  },
};
