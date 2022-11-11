import React from 'react';
import Book from './Book';

export default function BookShelf({ title, books, setBooks }) {
  return (
    <div className="bookshelf">
      {title && <h2 className="bookshelf-title">{title}</h2>}
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map((book) => (
            <li key={book.id}>
              <Book book={book} setBooks={setBooks}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
