import { type Meta, type StoryObj } from '@storybook/react';
import '../../styles/colors';
import Select from '.';

const meta: Meta<typeof Select> = {
  title: 'im-helping/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded', // 'padded' | 'centered' | 'fullscreen'
    docs: {
      canvas: { sourceState: 'none' }, // 'hidden' | 'shown' | 'none'
    },
  },
  argTypes: {
    value: {
      name: 'value',
      type: { name: 'function', required: false },
      defaultValue: 'Школа',
      description: 'Вариант value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Школа' },
      },
      control: {
        type: 'text',
      },
    },
    elementsList: {
      name: 'elementsList',
      type: { name: 'string', required: false },
      description: 'Вариант elementsList',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'Школа №594' },
      },
      control: {
        sort: 'requiredFirst',
        type: 'select',
        labels: {
          'Школа №75': 'Школа №75',
          'Школа №594': 'Школа №594',
          'Школа №1137': 'Школа №1137',
        },
        options: ['Школа №75', 'Школа №594', 'Школа №1137'],
      },
    },
    isError: {
      name: 'isError',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Вариант Error',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' },
      },
      options: ['false', 'true'],
    },
    errorText: {
      name: 'errorText',
      type: { name: 'string', required: false },
      defaultValue: 'Введите номер карты',
      description: 'Вариант Error',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Введите номер карты' },
      },
      control: {
        type: 'radio',
      },
      options: ['Введите номер карты', 'Ошибка загрузки'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    value: 'Школа',
    errorText: 'Неверный формат телефонного номера',
    elementsList: ['Школа №75', 'Школа №594', 'Школа №1137'],
  },
};

export const Error: Story = {
  args: {
    value: 'Школа',
    errorText: 'Ошибка загрузки',
    /* isError: ('Школа')=> true, */
  },
};
