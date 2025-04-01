'use client';
import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { usePathname } from 'next/navigation';
import style from '../typhography/Typography.module.css';

export interface NoteProps {
  title: string;
  tags: string[];
  lastEdited: string;
}

interface NoteItemProps {
  note: NoteProps;
}

function NoteItem({ note }: NoteItemProps) {
  const pathName = usePathname();
  const date = format(new Date(note.lastEdited), 'yyyy-MM-dd');
  return (
    <Link
      href={`${pathName}?title=${note.title}&id=${note.title}`}
      className={
        'p-2 flex flex-col gap-3 rounded-lg transition hover:bg-neutral-100 dark:hover:bg-neutral-800'
      }
    >
      <h4
        className={`${style.textPreset_3} text-neutral-950 dark:text-neutral-50`}
      >
        {note.title}
      </h4>
      <div className={'flex flex-wrap gap-1'}>
        {note.tags.map((tag, index) => (
          <div
            key={`${index}-${tag}`}
            className={
              'px-[6px] py-[2px] bg-neutral-200 rounded-sm dark:bg-neutral-800'
            }
          >
            <p
              className={`${style.textPreset_6} text-neutral-950 dark:text-neutral-50`}
            >
              {tag}
            </p>
          </div>
        ))}
      </div>
      <p className={`${style.textPreset_6} text-neutral-400`}>{date}</p>
    </Link>
  );
}

export default NoteItem;
