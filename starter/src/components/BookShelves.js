import React from 'react';
import BookShelf from './BookShelf';

export default function BookShelves() {
  return (
    <>
      <BookShelf title="Currently Reading" />
      <BookShelf title="Want To Read" />
      <BookShelf title="Read" />
    </>
  );
}
