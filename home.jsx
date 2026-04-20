import './home.scss'

const cursos = [
  { titulo: "Informática", desc: "Aprenda programação e tecnologia." },
  { titulo: "Edificações", desc: "Construa o futuro com engenharia." },
  { titulo: "Eletrotécnica", desc: "Domine circuitos e energia." },
  { titulo: "Agropecuária", desc: "Tecnologia no campo." }
]

export default function Home() {
  return (
    <div className="container">
      <h1>Partiu IF 🚀</h1>
      <p className="sub">Explore cursos e comece sua jornada no Instituto Federal</p>

      <div className="grid">
        {cursos.map((c, i) => (
          <div className="card" key={i}>
            <h2>{c.titulo}</h2>
            <p>{c.desc}</p>
            <button>Ver mais</button>
          </div>
        ))}
      </div>
    </div>
  )
}
