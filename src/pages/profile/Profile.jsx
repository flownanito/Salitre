import React, { useState, useEffect } from "react";
import "./Profile.css";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import CapturesService from "../../services/captures.service";
import database from "../../services/firebase.js";
import { ref, get, remove, push } from "firebase/database";

const Profile = () => {
  const [form, setForm] = useState({
    carnada: "",
    caña: "",
    cedal: "",
    señuelo: "",
    peso: "",
    pez: "",
    clima: "",
    viento: "",
    oleaje: "",
    pescadero: "",
  });

  const [capturas, setCapturas] = useState([]);

  // Cargar datos desde Firebase
  useEffect(() => {
    const capturasRef = ref(database, "Capturas");
    get(capturasRef).then((snapshot) => {
      if (snapshot.exists()) {
        setCapturas(Object.values(snapshot.val()));
      }
    });
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar formulario a Firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    push(ref(database, "Capturas"), form).then(() => {
      setCapturas([...capturas, form]); // Actualiza la lista localmente
      setForm({
        carnada: "",
        caña: "",
        cedal: "",
        señuelo: "",
        peso: "",
        pez: "",
        clima: "",
        viento: "",
        oleaje: "",
        pescadero: "",
      });
    });
  };

  return (
    <body>
      <Header />
      <div>
        <h2>Registro de Capturas</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(form).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={form[key]}
              onChange={handleChange}
            />
          ))}
          <button type="submit">Guardar Captura</button>
        </form>

        {/* Lista de Capturas debajo del formulario */}
        <h3>Lista de Capturas</h3>
        <ul>
          {capturas.map((captura, index) => (
            <li key={index}>
              <strong>{captura.pez}</strong> - {captura.peso}kg - {captura.clima}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </body>
  );
};

export default Profile;