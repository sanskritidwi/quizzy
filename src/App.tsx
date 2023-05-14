import React from 'react';
import './styles/css/all.css'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz/>} />
          <Route path="*" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
