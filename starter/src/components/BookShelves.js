import React from 'react';
import BookShelf from './BookShelf';

export default function BookShelves({books}) {
  return (
    <>
      <BookShelf title="Currently Reading" books={books}/>
      <BookShelf title="Want To Read" books={books}/>
      <BookShelf title="Read" books={books}/>
    </>
  );
}
