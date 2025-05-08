import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import './App.css'
import Aleatorios from './componentes/Aleatorios'
import Capturados from './componentes/Capturados';
import Detalle from './componentes/Detalle'
import Favoritos from './componentes/Favoritos'
import Original from './componentes/Original'
import Usuario from './componentes/Usuario'
import Listar from './componentes/Listar'
import Menu from './componentes/Menu'

function App() {

  return (
    <AppProvider>
    <Router>

      <Menu/>

      <Routes>
        
      <Route path="/Listar" element={<Listar/>}/>
      <Route path="/Aleatorios" element={<Aleatorios/>}/>
      <Route path="/Capturados" element={<Capturados/>}/>
      <Route path="/Detalle" element={<Detalle/>}/>
      <Route path="/Favoritos" element={<Favoritos/>}/>
      <Route path="/Original" element={<Original/>}/>
      <Route path="/Usuario" element={<Usuario/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/detalle/:name" element={<Detalle />} />

      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App