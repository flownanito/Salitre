import "./Header.css";

function Header() {
  return (

<header class="header">
  <div class="logo">🎣 Salitre</div>
  <nav class="nav">
    <ul class="nav-links">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#capturas">Mis Capturas</a></li>
      <li><a href="#comunidad">Comunidad</a></li>
      <li><a href="#perfil">Perfil</a></li>
    </ul>
  </nav>
  <button class="menu-btn">☰</button>
</header>


  );


}

export default Header;