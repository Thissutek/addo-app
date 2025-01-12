import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Projects from './pages/Project/Project';
import Members from './pages/Members/Members';

export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/members' element={<Members />}></Route>
      </Routes>
  )
}
