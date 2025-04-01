import React from 'react';
import Image from 'next/image';
import styles from '../typhography/Typography.module.css';
import { LucideIcon } from 'lucide-react';

type ButtonType = 'primary' | 'secondary' | 'border';
interface ButtonProps {
  type: ButtonType;
  Icon?: LucideIcon;
  children?: React.ReactNode;
  onClick?: () => void;
}
export const baseButton =
  'rounded-xl flex items-center justify-center gap-2 px-4 py-3 transition focus:shadow-button';

function Button({ children, Icon, type, onClick }: ButtonProps) {
  const baseClass = `${baseButton} ${styles.textPreset_4}`;
  let typeClass: string = '';
  switch (type) {
    case 'primary':
      typeClass =
        'text-neutral-0 bg-blue-500 border border-blue-500 hover:bg-blue-700 hover:border-blue-700';
      break;
    case 'secondary':
      typeClass = 'bg-neutral-100';
      break;
  }

  const className = `${baseClass} ${typeClass}`;

  return (
    <button onClick={onClick} className={className}>
      {Icon ? <Icon /> : ''}
      {children}
    </button>
  );
}

export default Button;
