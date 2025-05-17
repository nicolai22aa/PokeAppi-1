import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import './App.css';
import { supabase } from './supabase.jsx';

import Aleatorios from './componentes/Aleatorios';
import Capturados from './componentes/Capturados';
import Detalle from './componentes/Detalle';
import Favoritos from './componentes/Favoritos';
import Original from './componentes/Original';
import Usuario from './componentes/Usuario';
import Listar from './componentes/Listar';
import Menu from './componentes/Menu';
import Login from './componentes/Login'; 
import Registro from './componentes/Registro'; 
import Administrador from './componentes/Administrador/index.jsx';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}
        <Routes>
          <Route path="/" element={usuario ? <Listar /> : <Navigate to="/login" />} />
          <Route path="/Listar" element={usuario ? <Listar /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/original" element={usuario ? <Original /> : <Navigate to="/login" />} />
          <Route path="/usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
          <Route path="/administrador" element={usuario ? <Administrador /> : <Navigate to="/login" />} />
          <Route path="/detalle/:name" element={usuario ? <Detalle /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
