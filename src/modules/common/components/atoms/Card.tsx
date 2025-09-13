interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'medium',
}: CardProps) => {
  const baseStyles = 'rounded-2xl';
  
  const variants = {
    default: 'bg-[#131620]',
    outlined: 'bg-gray-800 border border-gray-200',
    elevated: 'bg-white shadow-md',
  };

  const paddings = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-5',
    large: 'p-8',
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  );
};