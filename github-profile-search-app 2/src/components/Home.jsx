import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleStyled = () => {
    if (username) {
      navigate(`/styled/users/${username}`);
    }
  };

  const handleTailwind = () => {
    if (username) {
      navigate(`/tailwind/users/${username}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
      <h1 className="text-3xl text-white mb-6">GitHub Profile Search</h1>
      <input
        type="text"
        placeholder="Digite o nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 rounded mb-4 w-full max-w-sm"
      />
      <div>
        <button
          onClick={handleStyled}
          className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
        >
          Styled-Components
        </button>
        <button
          onClick={handleTailwind}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Tailwind CSS
        </button>
      </div>
    </div>
  );
}
