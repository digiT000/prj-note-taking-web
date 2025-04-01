import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react'; // <--- import type from library
import style from '../typhography/Typography.module.css';

interface MenuItemProps {
  label: string;
  to: string;
  icon: LucideIcon; // Expect a React component for the icon
  isSelected: boolean;
}

function MenuItem({ to, label, icon: Icon, isSelected }: MenuItemProps) {
  return (
    <Link
      href={to}
      className={`px-3 py-2 flex items-center justify-between rounded-2xl hover:bg-neutral-100 transition ${isSelected ? 'bg-neutral-100 dark:bg-neutral-800' : ''} dark:hover:bg-neutral-800`}
    >
      <div className={'flex items-center gap-2 w-full'}>
        <Icon
          key={'tes'}
          size={20}
          className={
            isSelected
              ? 'text-blue-500'
              : 'text-neutral-800 dark:text-neutral-50'
          }
        />
        <span
          className={`${style.textPreset_4} text-neutral-700 dark:text-neutral-50`}
        >
          {label}
        </span>
      </div>
      <ChevronRight
        size={20}
        color={'#2B303B'}
        className={`${isSelected ? 'visible' : 'invisible'}`}
      />
    </Link>
  );
}

export default MenuItem;
