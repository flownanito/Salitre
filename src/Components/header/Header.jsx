import "./Header.css";

function Header() {
  return (

    <header className="header">
      <div className="logo">🎣 Salitre</div>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#capturas">Mis Capturas</a></li>
          <li><a href="#comunidad">Comunidad</a></li>
          <li><a href="#perfil">Perfil</a></li>
        </ul>
      </nav>
      <button className="menu-btn" onClick={toggleMenu}>☰</button>
    </header>
  );


}

export default Header;