import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Character } from './components/Character/Character.jsx';
import { Configure } from './components/Configure/Configure.jsx';
import { CharacterPage } from './components/CharacterPage/CharacterPage.jsx';
import ProtectedRoutes from './components/ProtectedRoutes';
import { Rize } from './components/Rize/Rize.jsx';


function App(){
  
  return(
    <HashRouter>
        <div className="App">
                <Routes>
                    <Route path="/" element={<Rize/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path="/charater" element={<Character/>}/>
                        <Route path="/charaterPage:id" element={<CharacterPage/>}/>
                    </Route>
                </Routes>  
          <Configure />
        </div>
    </HashRouter>
  );
}

export default App;
