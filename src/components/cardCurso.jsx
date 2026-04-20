import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

function CardCurso({ curso, mostrarFavoritar = true, mostrarRemover = false }) {
  const { favoritos, adicionarFavorito, removerFavorito } = useContext(FavoritosContext);

  const jaFavoritado = favoritos.some((f) => f.id === curso.id);

  return (
    <div className="card">
      <h3>{curso.title}</h3>
      <p>{curso.body}</p>

      <Link to={`/curso/${curso.id}`} state={{ curso }}>
        <button className="btn-padrao">Ver detalhes</button>
      </Link>

      {mostrarFavoritar && (
        <button
          className={`btn-padrao ${jaFavoritado ? "favoritado" : ""}`}
         onClick={() =>
        jaFavoritado
        ? removerFavorito(curso.id)
        : adicionarFavorito(curso)
}
        >
          {jaFavoritado ? "✓ Favoritado" : "Favoritar"}
        </button>
      )}

      {mostrarRemover && (
        <button className="btn-padrao" onClick={() => removerFavorito(curso.id)}>
          Remover
        </button>
      )}
    </div>
  );
}

export default CardCurso;