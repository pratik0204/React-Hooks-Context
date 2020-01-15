import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Booklist from './Components/booklist';
import ThemeContextProvider from './Context/ThemeContext';
import ThemeToggle from './Components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <Booklist/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
