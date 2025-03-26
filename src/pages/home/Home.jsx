import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import captura2 from "../../assets/captura2.jpg";
import captura1 from "../../assets/captura1.jpg";
import captura3 from "../../assets/captura3.jpg";
import carlos from "../../assets/carlos.jpg";
import jeremy from "../../assets/jeremywey.jpg";
import "./Home.css";

function Home() {
  return (
    <body>


      <div>
        <Header />


        <section className="carousel" id="capturas">
          <h2>Capturas de la Semana</h2>
          <div className="carousel-container">
            <div className="carousel-slide">
              <img src={captura1} alt="Captura 1" />
            </div>
            <div className="carousel-slide">
              <img src={captura2} alt="Captura 2" />
            </div>
            <div className="carousel-slide">
              <img src={captura3} alt="Captura 3" />
            </div>
          </div>
        </section>

        <section>
  <h2>Noticias del Mar</h2>
  <div className="news-container">
    <button
      className="news-item"
      onClick={() => window.open("https://front.id/es/articles/css-animaciones-con-keyframes" , "_blank")}
    >
      Nueva regulación sobre pesca sostenible
    </button>
    <button
      className="news-item"
      onClick={() => window.open("https://example.com/https://front.id/es/articles/css-animaciones-con-keyframes", "_blank")}
    >
      Descubren una nueva especie en el Atlántico
    </button>
    <button
      className="news-item"
      onClick={() => window.open("https://example.cohttps://front.id/es/articles/css-animaciones-con-keyframesm/noticia3", "_blank")}
    >
      Campeonato de pesca en alta mar este mes
    </button>
  </div>
</section>

        <section class="miembros">
          <h2>Nuestros Miembros</h2>
          <div class="miembros-container">
            <div class="miembro">
            <img src={carlos} alt="Carlos kayac" />
              <h3>Carlos kayac</h3>
              <p>Función: Capitán</p>
              <p>Capturas del año: 45</p>
              <p>Peso total: 350 kg</p>
            </div>
            <div class="miembro">
            <img src={jeremy} alt="Jeremy wey" />
              <h3>Jeremy wey</h3>
              <p>Función: Navegante</p>
              <p>Capturas del año: 30</p>
              <p>Peso total: 280 kg</p>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </body>
  );
}

export default Home;
