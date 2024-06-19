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
      <Form tipo1 = "text" tipo2 = "number" tipo3 = "time" tipo4 = "submit"></Form>
      <Listado></Listado>
    </div>
  );
}

export default App;
