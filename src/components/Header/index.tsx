import './style.css';

function Header() {
  return (
    <header className='header-section'>
      <div className='header-container'>
        <h2>{`Guiigle`}</h2>
        <a href=""><i className="bi bi-whatsapp"></i> Fale comigo</a>
      </div>
    </header>
  )
}

export default Header;
// This component serves as the header of the application, displaying a title or logo.