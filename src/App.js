
import './App.css';
import Header from './template/Header';
import Menu from './template/Menu';

import React from 'react';
import Route from './template/Route';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Menu />
        <Route />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
