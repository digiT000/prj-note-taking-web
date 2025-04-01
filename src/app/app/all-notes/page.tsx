import React from 'react';
import InnerSideBar from '@/components/navigation/InnerSideBar';
import ListNotes from '@/components/note/ListNotes';

function AllNotesPage() {
  return (
    <div className={'flex'}>
      <InnerSideBar
        RenderList={() => (
          <ListNotes dataResource={'http://localhost:8000/notes'} />
        )}
      />
    </div>
  );
}

export default AllNotesPage;
