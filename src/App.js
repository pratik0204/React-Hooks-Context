import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Booklist from './Components/booklist';
import ThemeContextProvider from './Context/ThemeContext';
import ThemeToggle from './Components/ThemeToggle'
import AuthContextProvider from './Context/AuthContext';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BookContextProvider>
            <Booklist/>
          </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
