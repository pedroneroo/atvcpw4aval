import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Detalhes() {
  const { id } = useParams()
  const [curso, setCurso] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setCurso(data))
  }, [id])

  if (!curso) return <p>Carregando...</p>

  return (
    <div>
      <h1>Detalhes do Curso</h1>
      <h2>{curso.title}</h2>
      <p>{curso.body}</p>
    </div>
  )
}

export default Detalhes