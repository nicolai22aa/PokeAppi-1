import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-menu">
          <Link to="/Listar">Listar</Link>
          <Link to="/Aleatorios">Aleatorios</Link>
          <Link to="/Detalle">Detalle</Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link to="/Usuario">Usuario</Link>
          <Link to="/Original">Original</Link>
        </nav>
    )
  }
 
  export default Menu