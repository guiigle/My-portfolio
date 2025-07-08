  import { Link } from "react-router-dom";
  import './style.css'
  import astronaut from './astronaut.png';

function NotFound() {
  return (
    <div className="notfound-section">
      <div className="notfound-container">
        <img src={astronaut} alt="" />
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>Oops... Parece que você viajou demais por aí e acabou se perdendo, clique no botão abaixo para viajar até um local seguro!</p>
        <Link to="/"><button>Voltar para o início <i className="bi bi-rocket-takeoff"></i></button></Link>
      </div>
    </div>
  );
}

export default NotFound;
// This component serves as a fallback for any routes that do not match, displaying a 404 error message.