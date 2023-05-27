/* eslint-disable @typescript-eslint/no-redeclare */

import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/colors';
import CircleButton from '.';
import { ReactComponent as Phone } from '../../../assets/icons/phone.svg';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import { ReactComponent as Location } from '../../../assets/icons/location_white.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus12.svg';

const meta: Meta<typeof CircleButton> = {
  title: 'im-helping/CircleButton',
  component: CircleButton,
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
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      defaultValue: 'small',
      description: 'Вариант size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    border: {
      name: 'border',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description: 'Вариант border',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
    children: {
      name: 'children',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант children',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'Phone' },
      },
      control: {
        type: [<Phone key='1' />, <Message key='2' />, <Location key='3' />, <Plus key='4' />],
      },
      options: [<Phone key='1' />, <Message key='2' />, <Location key='3' />, <Plus key='4' />],
    },
  },
};
export default meta;

type Story = StoryObj<typeof CircleButton>;

export const MediumDefault: Story = {
  args: {
    size: 'small',
    isDisabled: false,
    border: 'primary',
    children: <Phone />,
  },
};

export const SmallDefault: Story = {
  args: {
    size: 'medium',
    isDisabled: false,
    border: 'primary',
    children: <Location />,
  },
};

export const LargeDefault: Story = {
  args: {
    size: 'large',
    isDisabled: false,
    border: 'primary',
    children: <Plus />,
  },
};
