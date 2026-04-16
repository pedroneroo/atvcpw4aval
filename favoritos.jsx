import { useContext } from "react"
import { FavoritosContext } from "../context/FavoritosContext"

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext)

  if (favoritos.length === 0) return <p>Nenhum favorito</p>

  return (
    <div>
      <h1>Favoritos</h1>

      {favoritos.map(curso => (
        <div key={curso.id}>
          <h3>{curso.title}</h3>
          <p>{curso.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Favoritos