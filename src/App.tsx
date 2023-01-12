import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
            <Route path="/" element={<Step1/>}></Route>
            <Route path="/step2" element={<Step2/>}></Route>
            <Route path="/step3" element={<Step3/>}></Route>
        </Routes>
    </>
  );
}

export default App;
