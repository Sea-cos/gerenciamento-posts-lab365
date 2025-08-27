// src/components/Post.jsx
import React from 'react';
import './Posts.css';

export default function Post({ 
  id, 
  tipo, 
  titulo, 
  descricao, 
  data, 
  imagem, 
  handleDelete 
}) {
  return (
    <div className="post-card">
      {imagem && (
        <div className="post-thumb">
          <img src={imagem} alt={`Capa: ${titulo}`} />
        </div>
      )}
      <div className="post-content">
        <span className="post-type">{tipo}</span>
        <h2 className="post-title">{titulo}</h2>
        <p className="post-desc">{descricao}</p>
        <div className="post-footer">
          <time className="post-date">Publicado em: {data}</time>
          <button
            className="post-delete"
            onClick={() => handleDelete(id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
