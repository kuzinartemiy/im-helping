/* eslint-disable @typescript-eslint/no-redeclare */

import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/colors';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'im-helping/Button',
  component: Button,
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
    viewType: {
      name: 'viewType',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description: 'Вариант viewType',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      defaultValue: 'medium',
      description: 'Вариант size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    children: {
      name: 'children',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант children',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Заблокировать' },
      },
      control: {
        type: 'radio',
      },
      options: ['Применить', 'Заблокировать', 'Создать'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const SecondaryLarge: Story = {
  args: {
    viewType: 'secondary',
    isDisabled: false,
    children: 'Заблокировать',
    size: 'large',
  },
};

export const PrimaryMedium: Story = {
  args: {
    viewType: 'primary',
    isDisabled: false,
    children: 'Применить',
    size: 'medium',
  },
};

export const PrimarySmall: Story = {
  args: {
    viewType: 'primary',
    isDisabled: false,
    children: 'Создать',
    size: 'small',
  },
};
