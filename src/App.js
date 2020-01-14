import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Booklist from './Components/booklist';
import ThemeContextProvider from './Context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <Booklist/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
