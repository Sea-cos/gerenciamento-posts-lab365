import { useState } from "react";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [data, setData] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //codigo para salvar dados.
    toast.success("Oii");
  };

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

            <label htmlFor="data">Data de publicação</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              id="data"
            />

            <label htmlFor="categoria">Categoria</label>
            <select
              value={categoria}
              id="categoria"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Artigo">Artigo</option>
              <option value="Noticia">Noticia</option>
              <option value="Tutorial">Tutorial</option>
              <option value="Entrevista">Entrevista</option>
            </select>

            <button type="submit">Criar post</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
