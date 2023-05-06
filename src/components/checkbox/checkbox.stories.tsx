import Checkbox, { type ICheckboxProps } from './index';
import type { StoryObj } from '@storybook/react';
import '../../styles/colors';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    isDisabled: {
      type: 'boolean',
      name: 'isDisabled',
      options: ['false', 'true'],
    },
    isChecked: {
      type: 'boolean',
      name: 'isChecked',
      options: ['false', 'true'],
    },
  },
};

type Story = StoryObj<ICheckboxProps>;

export const Default: Story = {
  args: {
    isDisabled: true,
    isChecked: true,
  },
};
