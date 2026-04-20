import { useContext } from "react";
import { Link } from "react-router-dom";
import CardCurso from "../components/cardCurso";
import { FavoritosContext } from "../context/FavoritosContext";
import "./home.scss";

function Favoritos() {
  const { favoritos, mensagem } = useContext(FavoritosContext);

  if (favoritos.length === 0) {
    return (
      <div className="container">
        <h1>Favoritos</h1>
        <p className="sub">Nenhum curso foi favoritado ainda.</p>

        <div className="top-actions">
          <Link to="/">
            <button className="btn-padrao">Voltar para Home</button>
          </Link>
        </div>

        {mensagem && <div className="mensagem-feedback">{mensagem}</div>}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Favoritos</h1>
      <p className="sub">Cursos salvos pelo usuário</p>

      <div className="top-actions">
        <Link to="/">
          <button className="btn-padrao">Voltar para Home</button>
        </Link>
      </div>

      {mensagem && <div className="mensagem-feedback">{mensagem}</div>}

      <div className="grid">
        {favoritos.map((curso) => (
          <CardCurso
            key={curso.id}
            curso={curso}
            mostrarFavoritar={false}
            mostrarRemover={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;