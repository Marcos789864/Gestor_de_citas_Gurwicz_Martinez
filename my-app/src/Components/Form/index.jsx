import React, { useState } from "react";
import Input from '../Input/index';

function Form({ tipo1, tipo2, tipo3, tipo4, agregarCita }) {
    const [Nombre, setNombre] = useState("");
    const [CantPersonas, setCantPersonas] = useState("");
    const [Fecha, setFecha] = useState("");
    const [Horario, setHorario] = useState("");
    const [error, setError] = useState("");

    const Handler = (e) => {
        e.preventDefault();

        if (parseInt(CantPersonas, 10) <= 0) {
            setError("La cantidad de personas debe ser un número positivo.");
            return;
        }

        console.log("fecha" + Fecha);
        
        const fechaSeleccionada = new Date(Fecha + "T00:00:00"); 
        console.log("Fecha seleccionada: " + fechaSeleccionada);

        const [horasSeleccionadas, minutosSeleccionados] = Horario.split(":").map(Number);

        fechaSeleccionada.setHours(horasSeleccionadas, minutosSeleccionados, 0, 0);
        console.log("Fecha y hora seleccionada con el horario: " + fechaSeleccionada);

        const fechaActual = new Date();
        const horaActual = new Date();
        horaActual.setSeconds(0);
        horaActual.setMilliseconds(0); 

        fechaActual.setHours(0, 0, 0, 0); 
        console.log("Fecha actual: " + fechaActual);

        const timestampSeleccionada = fechaSeleccionada.getTime();
        const timestampActual = horaActual.getTime();

        if (timestampSeleccionada < timestampActual) {
            setError("La fecha y hora seleccionada no pueden ser menores que la fecha y hora actuales.");
            return;
        }

        if (timestampSeleccionada === timestampActual) {
            const horasActual = horaActual.getHours();
            const minutosActual = horaActual.getMinutes();

           
            if (
                horasSeleccionadas < horasActual ||
                (horasSeleccionadas === horasActual && minutosSeleccionados <= minutosActual)
            ) {
                setError("El horario seleccionado no puede ser menor que la hora actual.");
                return;
            }
        }

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
        setError("");
    };

    return (
        <div>
            <form onSubmit={Handler}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Input
                    id="nombre"
                    tipo={tipo1}
                    txt="Nombre"
                    value={Nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <Input
                    id="cantPersonas"
                    tipo={tipo2}
                    txt="Cantidad de Personas"
                    value={CantPersonas}
                    onChange={(e) => setCantPersonas(e.target.value)}
                    required
                />
                <Input
                    id="fecha"
                    tipo={tipo3}
                    txt="Fecha"
                    value={Fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
                <Input
                    id="horario"
                    tipo={tipo4}
                    txt="Horario"
                    value={Horario}
                    onChange={(e) => setHorario(e.target.value)}
                    required
                />
                <Input tipo="submit" />
            </form>
        </div>
    );
}

export default Form;


