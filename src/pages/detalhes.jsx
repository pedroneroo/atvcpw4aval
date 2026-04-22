import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./detalhes.scss";

function DetalhesCurso() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const curso = location.state?.curso;

  if (!curso) {
    return (
      <div className="detalhes-container">
        <div className="detalhes-card">
          <h1>Curso não encontrado</h1>
          <button className="btn-padrao" onClick={() => navigate("/")}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="detalhes-container">
      <div className="detalhes-card">
        <h1>{curso.title}</h1>

        <p className="resumo">{curso.body}</p>

        <p className="carga">
          <strong>Carga horária:</strong> {curso.cargaHoraria}
        </p>

        <div className="bloco">
          <h3>O que será ensinado</h3>
          <p>{curso.conteudos}</p>
        </div>

        <div className="bloco">
          <h3>Sobre o curso</h3>
          <p>{curso.detalhes}</p>
        </div>

        <button className="btn-padrao" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default DetalhesCurso;