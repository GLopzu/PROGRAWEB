import React, { useState, useEffect } from 'react';
import './name.css'

function NameInput({ startGame }) {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
      setNombre(storedName);
    }
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 5) {
      setNombre(inputValue);
      localStorage.setItem('playerName', inputValue);
    }
  };

  const handleSubmit = () => {
    startGame(nombre);
  };

  return (
    <div className="nombre-input">
      <label htmlFor="nombre">Ingrese un nombre (máximo 5 caracteres):</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={handleChange}
        maxLength={5}
      />
      <button onClick={handleSubmit}>Guardar y empezar</button>
      <p>{nombre.length}/5 caracteres utilizados</p>
    </div>
  );
}

export default NameInput;
