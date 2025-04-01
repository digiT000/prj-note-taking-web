import React, { HTMLInputTypeAttribute } from 'react';
import Image from 'next/image';

interface InputProps {
  type: HTMLInputTypeAttribute;
  id: string;
  withIcon?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  showPass?: boolean;
  onShowPass?: () => void;
}

export const baseInputStyle =
  'text-neutral-950 dark:text-neutral-50 bg-transparent dark:placeholder:text-neutral-500 px-4 py-2 rounded-xl bg-neutral-0 border border-neutral-300 dark:border-neutral-800 w-full transition hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-neutral-500 dark:focus:outline-neutral-700 focus:shadow-input  disable:bg-neutral-50 disable:placeholder:text-neutral-50';

function InputField({
  type,
  id,
  withIcon = false,
  placeholder,
  value,
  onChange,
  showPass = false,
  onShowPass,
}: InputProps) {
  return (
    <div className={'relative w-full bg-transparent'}>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        className={baseInputStyle}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {withIcon && (
        <Image
          role={'button'}
          onClick={onShowPass}
          src={`/assets/icon/${showPass ? 'show.svg' : 'hide.svg'}`}
          alt={'icon show or hide'}
          width={64}
          height={64}
          className={'cursor-pointer w-5 h-5 absolute right-4 top-4'}
        />
      )}
    </div>
  );
}

export default InputField;
