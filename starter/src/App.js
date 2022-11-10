import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Search from './components/Search';
import { getAll } from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => {
      console.log(books)
      setBooks(books);
    });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
        />
      ) : (
        <HomePage
          setShowSearchpage={setShowSearchpage}
            showSearchPage={showSearchPage}
            books={books}
        />
      )}
    </div>
  );
}

export default App;
