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

        <Route path="om-oss" element={<Pages.Om_oss />} />
        <Route path="kontakt-oss" element={<Pages.kontakt_oss />} />
        <Route path="logg-inn" element={<Pages.logg_inn />} />
        <Route path="registrer" element={<Pages.registrer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
