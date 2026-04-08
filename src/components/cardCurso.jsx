import { Link } from "react-router-dom"

function CardCurso({ curso }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{curso.title}</h3>
      <p>{curso.body}</p>

      <Link to={`/curso/${curso.id}`}>
        <button>Ver detalhes</button>
      </Link>
    </div>
  )
}

export default CardCurso