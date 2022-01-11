import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Header from "./components/Header"
import * as Pages from "./Pages"

function App() {


  return (
    <>
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Home />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
