/* eslint-disable @typescript-eslint/no-redeclare */

import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/colors';
import Text from '.';

const meta: Meta<typeof Text> = {
  title: 'im-helping/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      defaultValue: '24',
      description: 'Вариант size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '24' },
      },
      control: {
        type: 'select',
      },
      options: ['12', '16', '20', '24'],
    },
    tag: {
      name: 'tag',
      type: { name: 'string', required: false },
      defaultValue: 'h1',
      description: 'Вариант tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h1' },
      },
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p'],
    },
    weight: {
      name: 'weight',
      type: { name: 'string', required: false },
      defaultValue: 'h1',
      description: 'Вариант weight',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '400' },
      },
      control: {
        type: 'radio',
        options: ['400', '700'],
      },
      options: ['400', '700'],
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      defaultValue: 'center',
      description: 'Вариант align',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
      control: {
        type: 'select',
      },
      options: ['right', 'left', 'center', 'justify', 'start'],
    },
    children: {
      name: 'children',
      type: { name: 'string', required: false },
      defaultValue: 'center',
      description: 'Вариант children',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Golos' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const H1: Story = {
  args: {
    size: '24',
    tag: 'h1',
    weight: '400',
    align: 'center',
    children: 'Golos',
  },
};

export const H2: Story = {
  args: {
    size: '16',
    tag: 'h2',
    weight: '700',
    align: 'left',
    children: 'Golos',
  },
};

export const H3: Story = {
  args: {
    size: '16',
    tag: 'h3',
    weight: '400',
    align: 'left',
    children: 'Golos',
  },
};

export const H4: Story = {
  args: {
    size: '12',
    tag: 'h4',
    weight: '700',
    align: 'left',
    children: 'Golos',
  },
};

export const H5: Story = {
  args: {
    size: '12',
    tag: 'h4',
    weight: '400',
    align: 'left',
    children: 'Golos',
  },
};
