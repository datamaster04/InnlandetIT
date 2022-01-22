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

        <Route path="/om-oss" element={<Pages.OmOss />} />
        <Route path="/kontakt-oss" element={<Pages.KontaktOss />} />
        <Route path="/logg-inn" element={<Pages.LoggInn />} />
        <Route path="/registrer" element={<Pages.Registrer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
