/* eslint-disable @typescript-eslint/no-redeclare */

import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/colors';
import ServiceButton from '.';

const meta: Meta<typeof ServiceButton> = {
  title: 'im-helping/ServiceButton',
  component: ServiceButton,
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
      defaultValue: 'close',
      description: 'Вариант viewType',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'close' },
      },
      control: {
        type: 'radio',
      },
      options: ['close', 'edit', 'approved'],
    },
    /*     children: {
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
    }, */
  },
};
export default meta;

type Story = StoryObj<typeof ServiceButton>;

export const Close: Story = {
  args: {
    viewType: 'close',
    isDisabled: false,
  },
};

export const Edit: Story = {
  args: {
    viewType: 'edit',
    isDisabled: false,
  },
};

export const Approved: Story = {
  args: {
    viewType: 'approved',
    isDisabled: false,
  },
};
