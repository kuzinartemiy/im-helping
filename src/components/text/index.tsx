interface ITextProps {
  children?: React.ReactNode
  color?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
  weight?: '400' | '700'
  size?: '12' | '16' | '24'
  align?: 'right' | 'left' | 'center' | 'justify' | 'start'
}

const Text = ({ children, tag = 'p', weight = '400', size = '12', color = 'black', align = 'start' }: ITextProps) => {
  const Component = tag;

  return (
    <Component style={{
      color,
      textAlign: align,
      fontSize: size,
      fontWeight: weight,
    }}>
      {children}
    </Component>
  );
};

export default Text;
