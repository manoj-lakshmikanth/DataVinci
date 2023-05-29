import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import { useState } from 'react';
import './index.css';
import userContext from './Context';

function App() {
  const [colorBlack, setColorBlack] = useState(false);
  return (
    <userContext.Provider
      value={{
        colorBlack,
        setColorBlack,
      }}
    >
      <div
        className="app"
        style={{
          backgroundColor: colorBlack === false ? 'white' : '#36454F',
          color: colorBlack === false ? '#36454F' : 'white',
          fontFamily: 'cursive',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
