import React from 'react';
import { update, getAll } from '../BooksAPI';

export default function Book({ book, setBooks }) {
  const fallbackThumbnailLink = 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.thumbnail || fallbackThumbnailLink})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf}
            onChange={(e) => {
              const chosenBookShelf = e.target.value;
              update(book, chosenBookShelf).then((response) => {
                getAll().then((books) => setBooks(books))
              })
            }
            }
          >
            <option disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}
