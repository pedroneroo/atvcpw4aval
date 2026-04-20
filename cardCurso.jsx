import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

function CardCurso({ curso }) {
  const { adicionarFavorito } = useContext(FavoritosContext);

  return (
    <div className="card">
      <h3>{curso.title}</h3>
      <p>{curso.body}</p>

      <Link to={`/curso/${curso.id}`}>
        <button>Ver detalhes</button>
      </Link>

      <button onClick={() => adicionarFavorito(curso)}>
        Favoritar
      </button>
    </div>
  );
}

export default CardCurso;