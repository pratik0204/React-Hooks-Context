import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Booklist from './Components/booklist';
import ThemeContextProvider from './Context/ThemeContext';
import ThemeToggle from './Components/ThemeToggle'
import AuthContextProvider from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <Booklist/>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
