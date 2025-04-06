import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Aleatorios from './componentes/Aleatorios'
import Detalle from './componentes/Detalle'
import Favoritos from './componentes/Favoritos'
import Original from './componentes/Original'
import Usuario from './componentes/Usuario'
import Listar from './componentes/Listar'
import Menu from './componentes/Menu'

function App() {

  return (
    <Router>

      <Menu/>

      <Routes>
        
      <Route path="/Listar" element={<Listar/>}/>
      <Route path="/Aleatorios" element={<Aleatorios/>}/>
      <Route path="/Detalle" element={<Detalle/>}/>
      <Route path="/Favoritos" element={<Favoritos/>}/>
      <Route path="/Original" element={<Original/>}/>
      <Route path="/Usuario" element={<Usuario/>}/>
      <Route path="/Menu" element={<Menu/>}/>

      </Routes>
    </Router>
  )
}

export default App