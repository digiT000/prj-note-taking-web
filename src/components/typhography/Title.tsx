import React from 'react';
import styles from './Typography.module.css';

interface TitleProps {
  order: number;
  textPreset: number;
  children: React.ReactNode;
  className?: string; // Optional prop for additional styling
}

function Title({ order, children, className, textPreset }: TitleProps) {
  const baseClassName = styles[`textPreset_${textPreset}`] || '';
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  switch (order) {
    case 1:
      return <h1 className={combinedClassName}>{children}</h1>;
    case 2:
      return <h2 className={combinedClassName}>{children}</h2>;
    case 3:
      return <h3 className={combinedClassName}>{children}</h3>;
    case 4:
      return <h4 className={combinedClassName}>{children}</h4>;
    case 5:
      return <h5 className={combinedClassName}>{children}</h5>;
    case 6:
      return <h6 className={combinedClassName}>{children}</h6>;
    default:
      return <h1 className={combinedClassName}>{children}</h1>; // Default to h1 if order is invalid
  }
}

export default Title;
