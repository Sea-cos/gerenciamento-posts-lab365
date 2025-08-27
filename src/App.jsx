import { useEffect, useState } from "react";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import PostsLists from "./pages/PostsLists";

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [data, setData] = useState("");
  const [categoria, setCategoria] = useState("");
  const [qtdPosts, setQtdPosts] = useState(0);

  useEffect(() => {
    const postsSalvo = JSON.parse(localStorage.getItem("posts")) || [];
    setQtdPosts(postsSalvo.length);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //codigo para salvar dados.
    if (!titulo.trim()) {
      toast.error("O título é obrigatório.");
      return;
    }

    if (!descricao.trim()) {
      toast.error("A descrição é obrigatória.");
      return;
    }

    if (!imagem.trim() || !imagem.startsWith("http")) {
      toast.error("A URL da imagem deve começar com 'http'.");
      return;
    }

    if (!categoria) {
      toast.error("Selecione uma categoria.");
      return;
    }

    const hoje = new Date();
    const dataPublicacaoFormatada = new Date(data);

    if (isNaN(dataPublicacaoFormatada.getTime())) {
      toast.error("Data de publicação inválida.");
      return;
    }

    if (dataPublicacaoFormatada < hoje.setHours(0, 0, 0, 0)) {
      toast.error("A data de publicação deve ser hoje ou no futuro.");
      return;
    }

    const novoPost = {
      id: Date.now(),
      titulo,
      descricao,
      imagem,
      categoria,
      data,
    };

    const postsExistentes = JSON.parse(localStorage.getItem("posts")) || [];
    const listaAtualizada = [...postsExistentes, novoPost];
    localStorage.setItem("posts", JSON.stringify(listaAtualizada));
    setQtdPosts(listaAtualizada.length);

    // Se passou por todas as validações
    toast.success("Post criado com sucesso!");
    setTitulo("");
    setDescricao("");
    setImagem("");
    setCategoria("");
    setData("");
  };

  return (
    <>
      <div className="main">
        <h1>Painel de Gerenciamento</h1>
        <p>Atualmente, voce tem {qtdPosts} posts cadastrados</p>

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
        <h1>Listagem de posts</h1>
      </div>
    </>
  );
}

export default App;
