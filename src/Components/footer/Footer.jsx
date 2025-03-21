import "./Footer.css";


function Footer() {
  return (
<footer className="footer">
      <div className="footer-content">
        <p className="footer-title">🌊 Salitre - Comunidad de Pescadores 🎣</p>

        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#capturas">Mis Capturas</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <p className="footer-legal">
          &copy; {new Date().getFullYear()} Salitre. Todos los derechos reservados.
        </p>
      </div>
    </footer>


  );


}


export default Footer