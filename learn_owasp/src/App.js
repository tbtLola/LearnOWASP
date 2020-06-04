import React from 'react';
import logo from './logo.svg';
import SideBar from './components/sidebar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar></SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
