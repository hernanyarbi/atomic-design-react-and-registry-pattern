interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

export const Container = ({
  children,
  className = '',
  maxWidth = 'lg',
  padding = true,
}: ContainerProps) => {
  const baseStyles = 'mx-auto w-full';
  
  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const paddingStyles = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div
      className={`${baseStyles} ${maxWidths[maxWidth]} ${paddingStyles} ${className}`}
    >
      {children}
    </div>
  );
};