import React from 'react';
import styles from './Typography.module.css';

interface TextProps {
  textPreset: number;
  className?: string;
  children: React.ReactNode;
}

function Text({ textPreset, children, className }: TextProps) {
  return (
    <p
      className={`${className} ${styles[`textPreset_${textPreset}`]} text-neutral-600 dark:text-neutral-50`}
    >
      {children}
    </p>
  );
}

export default Text;
