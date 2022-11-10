import React from 'react';
import BookShelves from './BookShelves';

export default function HomePage(props) {
  const { setShowSearchpage, showSearchPage, books } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelves books={books} />
      </div>
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}
