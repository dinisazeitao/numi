"use client";

import { useEffect, useState } from "react";

export default function Contador() {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);

  // Carregar valores do localStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem("contador");
    const savedHistory = localStorage.getItem("contador-history");

    if (saved) setCount(Number(saved));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Guardar valores sempre que mudam
  useEffect(() => {
    localStorage.setItem("contador", String(count));
    localStorage.setItem("contador-history", JSON.stringify(history));
  }, [count, history]);

  const updateCount = (newValue: number) => {
    // Respeitar limites
    if (newValue < 0 || newValue > 10) return;

    setCount(newValue);
    setHistory(prev => [...prev, newValue]);
  };

  const reset = () => {
    setCount(0);
    setHistory(prev => [...prev, 0]);
  };

  // Determinar cor do número
  const getColor = () => {
    if (count <= 3) return "red";
    if (count <= 7) return "orange";
    return "green";
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <p style={{ fontSize: "1.5rem", color: getColor(), fontWeight: "bold" }}>
        Valor atual: {count}
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => updateCount(count + 1)}>+</button>
        <button onClick={() => updateCount(count - 1)}>-</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h3>Histórico</h3>
      <ul>
        {history.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
}
