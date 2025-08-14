import { useState } from "react";
import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //codigo para salvar dados.
  }

  return (
    <>
      <div className="main">
        <h1>Painel de Gerenciamento</h1>
        <p>Atualmente, voce tem {} posts cadastrados</p>

        <div className="div-form">
          <p>Novo Post</p>
          <form onSubmit={handleSubmit} id="form">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              value={titulo}
              id="titulo"
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Digite o titulo"
            />

            <label htmlFor="descricao">Descrição</label>
            <textarea
              value={descricao}
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Digite a descrição"
            />

            <label htmlFor="imagem">URL da imagem de capa</label>
            <input 
            type="url"  
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="URL da imagem de capa"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
