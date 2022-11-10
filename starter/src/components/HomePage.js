import React from 'react';
import BookShelves from './BookShelves';

export default function HomePage(props) {
  const { setShowSearchpage, showSearchPage, books, setBooks } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelves books={books} setBooks={setBooks}/>
      </div>
      <div className="open-search">
        <button onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</button>
      </div>
    </div>
  );
}
