import React from 'react';
import { capitalizeWords } from '@/helper/CapitalFirstLetter';
import style from '../typhography/Typography.module.css';
import SearchBar from '@/components/general/SearchBar';

interface HeaderProps {
  currentPath: string;
}

function Header({ currentPath }: HeaderProps) {
  const path = capitalizeWords(currentPath);
  return (
    <header
      className={
        'min-h-20 px-8 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800'
      }
    >
      <h1
        className={`${style.textPreset_1} text-neutral-950 dark:text-neutral-50`}
      >
        {path}
      </h1>
      <div>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
