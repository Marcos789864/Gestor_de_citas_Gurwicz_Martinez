import React from "react";

function Input({ id, tipo, txt, value, onChange, required }) {
    return (
        <div>
            <label htmlFor={id}>{txt} </label>
            <input id={id} type={tipo} value={value} onChange={onChange} required={required} />
        </div>
    );
}

export default Input;