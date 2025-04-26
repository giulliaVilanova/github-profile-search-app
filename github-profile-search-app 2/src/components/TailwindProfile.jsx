import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TailwindProfile() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [username]);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      Loading...
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-300 rounded-2xl p-6 w-full max-w-xs text-center">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-semibold">{data.name || data.login}</h2>
        <hr className="border-t border-gray-500 my-2" />
        <p className="text-sm">{data.bio}</p>
        <hr className="border-t border-gray-500 my-2" />
        <p className="text-sm">Repositórios públicos: {data.public_repos}</p>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-green-700 text-white rounded"
        >
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}
