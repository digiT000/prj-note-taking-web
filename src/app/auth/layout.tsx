import React from 'react';

interface LayoutGeneralProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: LayoutGeneralProps) {
  return (
    <main className={'min-h-full bg-neutral-100 dark:bg-neutral-700'}>
      {children}
    </main>
  );
}

export default AuthLayout;
