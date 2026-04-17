import React, { useState } from 'react';

export default function App() {
  const [jogos, setJogos] = useState([]); 
  const [input, setInput] = useState(""); 

  const add = () => {
    setJogos([...jogos, input]);
    setInput(""); 
  };

  const del = (index) => {
    setJogos(jogos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={add}>Add</button>

      <ul>
        {jogos.map((j, i) => (
          <li key={i}>
            {j} <button onClick={() => del(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}