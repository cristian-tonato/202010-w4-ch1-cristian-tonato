import React from 'react';
import { Gentleman } from "./components/gentleman";
import {Info} from "./components/Info";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <Info></Info>
        <main className="main">
          <ul className="gentlemen">
            <Gentleman></Gentleman>
            <Gentleman></Gentleman>
            <Gentleman></Gentleman>
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
