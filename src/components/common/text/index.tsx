import { type DetailedHTMLProps } from 'react';

interface ITextProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: React.ReactNode;
  color?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  weight?: '400' | '700';
  size?: '12' | '16' | '20' | '24';
  align?: 'right' | 'left' | 'center' | 'justify' | 'start';
  lineHeight?: string | number;
}

const Text = ({ children, tag = 'p', weight = '400', size = '12', color = 'black', align = 'start', lineHeight = 1 }: ITextProps) => {
  const Component = tag;

  return (
    <Component
      style={{
        color,
        textAlign: align,
        fontSize: `${size}px`,
        fontWeight: weight,
        lineHeight,
      }}>
      {children}
    </Component>
  );
};

export default Text;
