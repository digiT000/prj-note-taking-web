import React from 'react';
import Button from '@/components/general/Button';
import { Plus } from 'lucide-react';

interface InnerSideBarProps {
  RenderList: React.ComponentType; // Expect a component type (function)
}

function InnerSideBar({ RenderList }: InnerSideBarProps) {
  return (
    <div className={'max-w-[290px] w-full pl-8 pr-6 py-5 flex flex-col gap-4'}>
      <Button type={'primary'} Icon={Plus}>
        Create New Note
      </Button>
      <RenderList />
    </div>
  );
}

export default InnerSideBar;
