import React from 'react';
import Title from '@/components/typhography/Title';

function Home() {
  return (
    <div className={'text-red-500 dark:text-blue-500'}>
      Landing Page for marketing
      <Title textPreset={1} order={1}>
        Ini Title Bos
      </Title>
    </div>
  );
}

export default Home;
