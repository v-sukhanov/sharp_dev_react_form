import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Step1 } from './Step1';

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
            <Route path="/" element={<Step1/>}></Route>
        </Routes>
    </>
  );
}

export default App;
