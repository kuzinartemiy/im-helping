import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/colors';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'im-helping/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Имя' },
      },
      control: {
        type: 'text',
      },
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'function', required: false },
      defaultValue: 'primary',
      description: 'Вариант text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Введите имя' },
      },
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'value',
      type: { name: 'function', required: false },
      defaultValue: 'Андрей',
      description: 'Вариант value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Андрей' },
      },
      control: {
        type: 'text',
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
    errorMessage: {
      name: 'errorMessage',
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

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Имя',
    placeholder: 'Введите имя',
  },
};

export const Error: Story = {
  args: {
    label: 'Телефон',
    value: '1234 5678 9000',
    isError: true,
    errorMessage: 'Неверный формат телефонного номера',
  },
};

export const Valid: Story = {
  args: {
    value: 'Андрей',
  },
};
