import React, { useState } from 'react';
import BookShelf from './BookShelf';
import { search } from '../BooksAPI';

export default function Search(props) {
  const { setShowSearchpage, showSearchPage, books, setBooks } = props;

  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleInputChange = (e) => {
    searchBooks(e.target.value);
  };

  const searchBooks = async (query) => {
    search(query).then((results) => {
      console.log(results)
      if (results && !results.error) {
        setSearchedBooks(
          results.map((book) => {
            const foundBook = books.find((b) => b.id === book.id);
            return { ...book, shelf: foundBook?.shelf || 'none' };
          })
        );
      } else {
        setSearchedBooks([]);
      }
    });
  };

  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      <BookShelf books={searchedBooks} setBooks={setBooks} />
    </>
  );
}
