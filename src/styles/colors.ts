const collection = {
  'color-primary': '#2e3192',
  'color-secondary': '#9798c9',

  'bg-button-sea': '#0071bc',
  'bg-button-wave': '#0091c7',
  'bg-button-seaweed': '#00a99d',
  'bg-button-grass': '#009245',

  'color-orange': '#fbb03b',
  'color-blue': '#b8e4fa',
  'color-orange-secondary': '#f9bc90',
  'color-orange-bright': '#f37920',
  'color-salad': '#acca3e',
  'color-fuchsia': '#d60080',
  'color-fuchsia-secondary': '#e97fc0',
  'color-error-border': '#E64646',

  'bg-button-disabled': '#818c99',

  background: '#fbfdff',
  white: '#ffffff',

  'text-color-black': '#000000',

  'pickerdate-border': '#E0E0E0',
} as const;

export type Token = keyof typeof collection;
export const COLORS = new Map(Object.entries(collection)) as Map<Token, string>;
