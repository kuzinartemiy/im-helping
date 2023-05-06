/* eslint-disable @typescript-eslint/no-redeclare */

import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/colors';
import NavCard from '.';
import { ReactComponent as CompletedApplications } from '../../assets/icons/completed-applications.svg';
/* import CompletedApplications from '../../assets/icons/completed-applications.svg'; */

const meta: Meta<typeof NavCard> = {
  title: 'im-helping/NavCard',
  component: NavCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    text: {
      name: 'text',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Подтверждение /Блокировка' },
      },
      control: {
        type: 'text',
      },
      /* options: ['Поиск', 'Создать'], */
    },
    icon: {
      name: 'icon',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Поиск' },
      },
      control: {
        type: <CompletedApplications/>,
      },
      options: [<CompletedApplications/>],
    },
    path: {
      name: 'path',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант path',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavCard>;

export const Default: Story = {
  args: {
    text: 'Подтверждение /Блокировка',
    icon: <CompletedApplications/>,
  },
};
