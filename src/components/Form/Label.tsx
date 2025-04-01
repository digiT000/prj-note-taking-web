import React from 'react';
import styles from '../typhography/Typography.module.css';

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.textPreset_4} text-neutral-950 dark:text-neutral-50`}
    >
      {children}
    </label>
  );
}

export default Label;
