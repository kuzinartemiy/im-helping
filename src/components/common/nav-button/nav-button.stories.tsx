/* eslint-disable @typescript-eslint/no-redeclare */

import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/colors';
import NavButton from '.';

const meta: Meta<typeof NavButton> = {
  title: 'im-helping/NavButton',
  component: NavButton,
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
    children: {
      name: 'children',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант children',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Поиск' },
      },
      control: {
        type: 'radio',
      },
      options: ['Поиск', 'Создать'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
  args: {
    isDisabled: false,
    children: 'Поиск',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: 'Поиск',
  },
};
