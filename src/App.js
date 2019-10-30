import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainPage from './components/MainPage/index';

let App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
