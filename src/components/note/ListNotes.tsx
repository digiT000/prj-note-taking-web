'use client';
import React, { useEffect, useState } from 'react';
import NoteItem, { NoteProps } from '@/components/note/NoteItem';
import axios from 'axios';
import useSWR from 'swr';
import NoteItemSkeleton from '@/components/note/NoteItemSkeleton';

interface ListNotesProps {
  dataResource: string;
}

async function fetcher(url: string) {
  const response = await axios.get(url);
  const data: [] = response.data;
  const mapNotes: NoteProps[] = data.map((item: NoteProps) => {
    return {
      title: item.title,
      tags: item.tags,
      lastEdited: item.lastEdited,
    };
  });
  return mapNotes;
}

function ListNotes({ dataResource }: ListNotesProps) {
  const { data, error, isLoading } = useSWR(dataResource, fetcher);

  if (isLoading) {
    return (
      <div className={'flex flex-col gap-1'}>
        {Array.from({ length: 8 }, (_, i) => (
          <NoteItemSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={'flex flex-col gap-1'}>
      {data?.map((note: NoteProps, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </div>
  );
}

export default ListNotes;
