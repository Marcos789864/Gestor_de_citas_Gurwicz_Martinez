import React, { useState } from "react";
import Input from '../Input/index';

function Form({ tipo1, tipo2, tipo3, tipo4, tipo5, agregarCita }) {
    const [Nombre, setNombre] = useState("");
    const [CantPersonas, setCantPersonas] = useState("");
    const [Fecha, setFecha] = useState("");
    const [Horario, setHorario] = useState("");

    const Handler = (e) => {
        e.preventDefault();
        const nuevaCita = {
            Nombre,
            CantPersonas,
            Fecha,
            Horario
        };
        agregarCita(nuevaCita);

        setNombre("");
        setCantPersonas("");
        setFecha("");
        setHorario("");
    };

    return (
        <div>
            <form onSubmit={Handler}>
                <Input id="nombre" tipo={tipo1} txt="Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} required />
                <Input id="cantPersonas" tipo={tipo2} txt="Cantidad de Personas" value={CantPersonas} onChange={(e) => setCantPersonas(e.target.value)} required />
                <Input id="fecha" tipo={tipo3} txt="Fecha" value={Fecha} onChange={(e) => setFecha(e.target.value)} required />
                <Input id="horario" tipo={tipo4} txt="Horario" value={Horario} onChange={(e) => setHorario(e.target.value)} required />
                <Input tipo="submit" />
            </form>
        </div>
    );
}

export default Form;