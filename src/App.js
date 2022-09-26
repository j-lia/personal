
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home.js';
import Words from './components/words.js';
import Picture from './components/picture.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/words' exact element={<Words />} />
          <Route path='/picture' exact element={<Picture />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;