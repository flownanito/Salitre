import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      
      {/* Aquí iría el contenido principal de la página */}
      <main>
        <h1>Bienvenido a PescApp</h1>
        <p>Tu comunidad de pescadores online.</p>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;
