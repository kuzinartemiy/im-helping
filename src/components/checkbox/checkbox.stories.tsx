import Checkbox, { type ICheckboxProps } from './index';
import type { StoryObj } from '@storybook/react';
import '../../styles/colors';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      type: 'boolean',
      name: 'disabled',
      options: ['false', 'true'],
    },
    checked: {
      type: 'boolean',
      name: 'checked',
      options: ['false', 'true'],
    },
  },
};

type Story = StoryObj<ICheckboxProps>;

export const Default: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
