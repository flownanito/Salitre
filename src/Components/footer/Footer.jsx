import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">🌊 Salitre - Comunidad de Pescadores 🎣</p>

        <nav className="footer-nav">
          <li><a href="/Home">Inicio</a></li>
          <li><a href="/Shop">Tienda</a></li>
          <li><a href="/Team">Comunidad</a></li>
          <li><a href="/Porfile">Perfil</a></li>
        </nav>

        <p className="footer-legal">
          &copy; {new Date().getFullYear()} Salitre. Todos los derechos reservados.
        </p>
      </div>
    </footer>


  );


}


export default Footer