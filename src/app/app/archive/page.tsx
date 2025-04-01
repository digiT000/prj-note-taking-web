import React from 'react';
import InnerSideBar from '@/components/navigation/InnerSideBar';
import ListNotes from '@/components/note/ListNotes';

function ArchivePage() {
  return (
    <div className={'flex'}>
      <InnerSideBar
        RenderList={() => (
          <ListNotes dataResource={'http://localhost:8000/archive'} />
        )}
      />
    </div>
  );
}

export default ArchivePage;
