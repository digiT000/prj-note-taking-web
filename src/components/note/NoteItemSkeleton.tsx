import React from 'react';

function NoteItemSkeleton() {
  return (
    <div
      className={
        'h-[100px] w-full rounded-sm bg-neutral-100 dark:bg-neutral-900 animate-pulse flex flex-col gap-2 p-2'
      }
    >
      <div
        className={
          'h-5 w-[85%] rounded-sm animate-pulse bg-neutral-300 dark:bg-neutral-800'
        }
      ></div>
      <div className={'flex gap-1'}>
        {Array.from({ length: 2 }, (_, i) => (
          <div
            key={i}
            className={
              'h-4 w-8 animate-pulse bg-neutral-300 dark:bg-neutral-800 rounded-sm'
            }
          ></div>
        ))}
      </div>
      <div
        className={
          'h-5 w-[50%] rounded-sm animate-pulse bg-neutral-300 dark:bg-neutral-800'
        }
      ></div>
    </div>
  );
}

export default NoteItemSkeleton;
