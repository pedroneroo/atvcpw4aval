import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./detalhes.scss";

function DetalhesCurso() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const cursosFallback = [
    {
      id: 1,
      title: "Língua Portuguesa",
      body: "Desenvolvimento de leitura, interpretação de texto, gramática e escrita.",
      detalhes:
        "Neste componente, os estudantes desenvolvem leitura, interpretação textual, gramática, ortografia e produção escrita. O objetivo é fortalecer a comunicação, a compreensão de textos e a capacidade de argumentação.",
    },
    {
      id: 2,
      title: "Matemática",
      body: "Raciocínio lógico e resolução de problemas.",
      detalhes:
        "Neste curso, os alunos revisam operações básicas, frações, porcentagem, equações e problemas matemáticos. O foco está no raciocínio lógico e na construção de uma base sólida para os estudos.",
    },
    {
      id: 3,
      title: "Ciências da Natureza",
      body: "Compreensão de fenômenos naturais.",
      detalhes:
        "Os estudantes entram em contato com conteúdos introdutórios de biologia, física e química, desenvolvendo pensamento científico e compreensão de fenômenos do cotidiano.",
    },
    {
      id: 4,
      title: "Oficinas de Redação",
      body: "Produção textual e argumentação.",
      detalhes:
        "As oficinas trabalham estrutura textual, coesão, coerência e argumentação. O estudante aprende a organizar melhor as ideias e produzir textos mais claros e bem construídos.",
    },
    {
      id: 5,
      title: "Orientação Acadêmica",
      body: "Apoio ao percurso escolar.",
      detalhes:
        "Esse acompanhamento ajuda os estudantes na organização da rotina de estudos, no planejamento acadêmico e na adaptação ao ambiente escolar, fortalecendo autonomia e disciplina.",
    },
    {
      id: 6,
      title: "Acompanhamento Psicopedagógico",
      body: "Suporte ao desenvolvimento do estudante.",
      detalhes:
        "Oferece apoio ao processo de aprendizagem, identificando dificuldades e auxiliando o estudante em seu desenvolvimento acadêmico e pessoal durante a formação.",
    },
  ];

  const curso =
    location.state?.curso ||
    cursosFallback.find((item) => item.id === Number(id));

  if (!curso) {
    return (
      <div className="detalhes-container">
        <div className="detalhes-card">
          <h1>Curso não encontrado</h1>
          <p className="resumo">
            Não foi possível localizar as informações deste curso.
          </p>
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

        <div className="descricao">
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