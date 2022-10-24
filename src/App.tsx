import React from 'react';
import { Header } from './components/header';
//import logo from './logo.svg';
import './App.css';
import { Controlls } from './components/controlls';
import { Main } from './components/main';

function App() {
  return (
    <>
    <div className="App">
      <Header></Header>
      <Controlls></Controlls>
      <Main></Main>
    </div>
    </>
  );
}

export default App;
