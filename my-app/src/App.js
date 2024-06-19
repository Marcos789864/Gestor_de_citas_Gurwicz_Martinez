import './App.css';
import React, { useState } from 'react';
import Form from '../src/Components/Form/index';
import Listado from '../src/Components/Listado/index';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };
  return (
    <div>
      <h1>Reservas Restaurante</h1>
      <div>
        <Form tipo1 = "text" tipo2 = "number" tipo3 = "date" tipo4 = "time" tipo5 = "submit" agregarCita = {agregarCita}></Form>
      <Listado listaCitas={citas} Eliminar={eliminarCita}></Listado>
      </div>
      
    </div>
  );
}

export default App;
