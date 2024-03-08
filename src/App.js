import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Landing Page!</h1>
        <p>This is a simple landing page built using React.</p>
        <button>Contact Us</button>
      </header>
      <section className="Features">
        <h2>Features</h2>
        <ul>
          <li>Responsive Design</li>
          <li>Easy to Customize</li>
          <li>Fast Loading</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
}

export default App;
