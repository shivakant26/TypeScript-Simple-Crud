import React, { useState } from 'react';
import './App.css';
import { Home } from './Component/home';
import { Profile } from './Component/profile';
import { Welcome } from './Component/welcome';


function App() {
    
  return (
    <div className="App">
     <Home />
     {/* <Welcome name="puspa"/> */}
     {/* <Profile title="profile Component" lang="typescript" status='single'/> */}
     <span style={{color:"green"}}>salary : 5ctc</span>
    </div>
  );
}

export default App;
