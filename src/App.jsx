import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src='../public/images/logo.svg' alt='' />
        <p>Hello Vite + React!</p>
      </header>
    </div>
  );
}

export default App;
