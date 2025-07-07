import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="/asas">Not Found Test</NavLink>
      </nav>
    </header>
  )
}

export default Header;
// This component serves as the header of the application, displaying a title or logo.