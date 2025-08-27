// src/components/PostsLists.jsx
import React, { useState, useEffect } from 'react';
import Post from '../components/Posts'
import './PostsLists.css'

function PostsLists() {
  const [posts, setPosts] = useState([]);

  // carrega posts do localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(stored);
  }, []);

  // exclui post por id
  function handleDelete(id) {
    const filtrados = posts.filter(post => post.id !== id);
    setPosts(filtrados);
    localStorage.setItem('posts', JSON.stringify(filtrados));
  }

    const countsByTipo = posts.reduce((acc, { categoria }) => {
    acc[categoria] = (acc[categoria] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
     <div className="posts-container">
      {/* Seção de contagem */}
      <div className="posts-counts">
        <h3>Posts por categoria</h3>
        <ul>
          {Object.entries(countsByTipo).map(([tipo, count]) => (
            <li key={tipo}>
              {tipo}: {count}
            </li>
          ))}
          {posts.length === 0 && <li>Nenhum post cadastrado</li>}
        </ul>
      </div>

      {/* Listagem de cards */}
      <div className="posts-list">
        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              tipo={post.tipo}
              titulo={post.titulo}
              descricao={post.descricao}
              data={post.data}
              imagem={post.imagem}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p className="empty-message">Nenhum post encontrado.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default PostsLists;
