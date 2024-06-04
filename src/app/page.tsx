"use client"; // Indica que este es un componente del cliente

import React, { useState, useEffect } from 'react';
import { getNumero , updateNumero} from '../lib/supabaseClient';

export default function Contador() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    async function fetchNumero() {
      const numeroFromDB = await getNumero();
      if (numeroFromDB && numeroFromDB.Numero !== null) {
        const aux = parseInt(numeroFromDB.Numero.toString()); // Convert the bigint value to a string before parsing it
        setNumero(aux); // Actualiza el estado del contador con el número de la base de datos
      }
    }
    fetchNumero();
  }, []);

  const incrementar = async () => {
    const nuevoNumero = numero + 1;
    setNumero(nuevoNumero);
    await updateNumero(nuevoNumero); // Actualiza el número en la base de datos
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="text-center">
      <h1 className="text-3xl mb-4">Trabajo Practico 4</h1>
      <p className="text-2xl mb-4">Número: {numero}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={incrementar}>Incrementar</button>
      </main>
    </div>
  );
}
