import React from "react";
import Cita from '../Cita/index.jsx';

function ListadoCita({ listaCitas, Eliminar }) {
    if (!Array.isArray(listaCitas)) {
        listaCitas = [listaCitas];
    }

    return (
        <div className="listado-citas">
            {listaCitas.map((cita, index) => (
                <Cita 
                    key={index}
                    Nombre={cita.Nombre}
                    CantPersonas={cita.CantPersonas}
                    Fecha={cita.Fecha}
                    Horario={cita.Horario} 
                    Eliminar={() => Eliminar(index)}
                />
            ))}
        </div>
    );
}

export default ListadoCita;