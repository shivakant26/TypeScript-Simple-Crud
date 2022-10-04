import React, { useState } from 'react';
import './App.css';
import { Home } from './Component/home';
import { FormicExample } from './Component/formiex';
import { Welcome } from './Component/welcome';
import { UseFormExample } from './Component/useFormex';


function App() {
    
  return (
    <div className="App">
      <div className='main-wr'>
        <div className='clearfix'>
          <div className='div-col'>
          <Home />
          </div>
          <div className='div-col'>
            <FormicExample title="Formic + Crud " lang="Typescript" status='single'/>
          </div>
          <div className='div-col'>
            <UseFormExample />
          </div>
        </div>
      </div>
     {/* <Home /> */}
     {/* <Welcome name="puspa"/> */}
     {/* <Profile title="profile Component" lang="typescript" status='single'/> */}
     <span style={{color:"green"}}>salary : 5ctc</span>
    </div>
  );
}

export default App;
