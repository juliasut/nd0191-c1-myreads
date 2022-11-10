import React from 'react';
import BookShelf from './BookShelf';

export default function BookShelves({books}) {
  return (
    <>
      <BookShelf title="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")} />
      <BookShelf title="Want To Read" books={books.filter((book) => book.shelf === "wantToRead")} />
      <BookShelf title="Read" books={books.filter((book) => book.shelf === "read")}/>
    </>
  );
}
