import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

function Registro() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    password: '',
    fechaNacimiento: '',
    telefono: '',
  });
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    const { data, error: errorAuth } = await supabase.auth.signUp({
      email: formulario.correo,
      password: formulario.password,
    });

    if (errorAuth) {
      setError(errorAuth.message);
      setCargando(false);
      return;
    }

    const uid = data.user.id;

    const { error: errorInsert } = await supabase.from('usuario').insert([
      {
        id: uid,
        nombre: formulario.nombre,
        correo: formulario.correo,
        fecha_nacimiento: formulario.fechaNacimiento,
        telefono: formulario.telefono,
        roll: 'usuario',
      },
    ]);

    if (errorInsert) {
      setError('Usuario creado pero error al guardar datos: ' + errorInsert.message);
    } else {
      navigate('/login');
    }

    setCargando(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formulario.correo}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formulario.password}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="date"
          name="fechaNacimiento"
          value={formulario.fechaNacimiento}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formulario.telefono}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <button
          type="submit"
          disabled={cargando}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {cargando ? 'Registrando...' : 'Registrarse'}
        </button>

        <button
          type="button"
          onClick={() => navigate('/login')}
          style={{
            width: '100%',
            marginTop: '1rem',
            padding: '0.75rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Ya tengo cuenta
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

export default Registro;
