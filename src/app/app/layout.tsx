'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/navigation/Sidebar';
import Header from '@/components/general/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // Get URL Path
  const pathname = usePathname();
  const currentPathname = pathname.split('/');

  return (
    <main className={'h-full min-h-full bg-neutral-0 dark:bg-neutral-950'}>
      <div className={'flex min-h-full'}>
        <Sidebar currentPath={currentPathname[currentPathname.length - 1]} />
        <div className={`flex flex-col w-full`}>
          <Header currentPath={currentPathname[currentPathname.length - 1]} />
          {children}
        </div>
      </div>
    </main>
  );
}
