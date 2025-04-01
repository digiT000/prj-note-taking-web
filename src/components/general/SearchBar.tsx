import React from 'react';
import { Search } from 'lucide-react';
import { baseInputStyle } from '@/components/Form/InputField';
import style from '../typhography/Typography.module.css';

function SearchBar() {
  return (
    <div className={'relative bg-transparent'}>
      <input
        placeholder={'Search by title, content, or tags…'}
        className={`${baseInputStyle} pl-10 ${style.textPreset_5}`}
        type={'text'}
        id={'search-bar'}
      />
      <Search
        size={20}
        className={
          'absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 text-neutral-500'
        }
        style={{ left: '24px', top: '50%' }}
      />{' '}
    </div>
  );
}

export default SearchBar;
