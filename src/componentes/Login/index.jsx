import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Usuario o contraseña no válidos');
    } else {
      navigate('/');
    }

    setCargando(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          {cargando ? 'Ingresando...' : 'Iniciar sesión'}
        </button>
        
          <br></br>
         

        <br />
        <button
          type="button"
          onClick={() => navigate('/registro')}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          Registrarte
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

export default Login;
