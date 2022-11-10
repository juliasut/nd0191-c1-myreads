import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage';
import Search from './components/Search';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

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
        />
      )}
    </div>
  );
}

export default App;
