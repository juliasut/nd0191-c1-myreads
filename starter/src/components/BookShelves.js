import React from 'react';
import BookShelf from './BookShelf';

export default function BookShelves({books, setBooks}) {
  return (
    <>
      <BookShelf title="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")} setBooks={setBooks}/>
      <BookShelf title="Want To Read" books={books.filter((book) => book.shelf === "wantToRead")} setBooks={setBooks}/>
      <BookShelf title="Read" books={books.filter((book) => book.shelf === "read")} setBooks={setBooks}/>
    </>
  );
}
