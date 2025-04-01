import React from 'react';
import { House } from 'lucide-react';
import { Archive } from 'lucide-react';
import MenuItem from '@/components/navigation/MenuItem';
import Logo from '@/components/general/Logo';
import Separator from '@/components/general/Separator';
import TagList from '@/components/navigation/TagList';
import Link from 'next/link';

const MENU_LIST = [
  { id: 'all-notes', label: 'All Notes', to: '/app/all-notes', icon: House },
  { id: 'archive', label: 'Archive', to: '/app/archive', icon: Archive },
];

interface SidebarProps {
  currentPath: string;
}

function Sidebar({ currentPath }: SidebarProps) {
  return (
    <aside
      className={
        'max-w-[272px] w-full min-h-full border-r border-r-neutral-200 p-4 flex flex-col gap-4 dark:border-r-neutral-800'
      }
    >
      <Link href={'/app/all-notes'} className={'py-3'}>
        <Logo />
      </Link>

      <div className={'flex flex-col gap-1'}>
        {MENU_LIST.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            to={item.to}
            icon={item.icon}
            isSelected={currentPath === item.id}
          />
        ))}
      </div>
      <Separator />

      <TagList currentPath={currentPath} />
    </aside>
  );
}

export default Sidebar;
