import { useEffect, useState } from "react"
import CardCurso from "../components/cardCurso"

function Home() {
  const [cursos, setCursos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setCursos(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Carregando...</p>

  if (cursos.length === 0) return <p>Nenhum curso encontrado</p>

  return (
    <div>
      <h1>Cursos</h1>
      import CardCurso from "../components/CardCurso"

{cursos.slice(0, 10).map(curso => (
  <CardCurso key={curso.id} curso={curso} />
))}
    </div>
  )
}

export default Home