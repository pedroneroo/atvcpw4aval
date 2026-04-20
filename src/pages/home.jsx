import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardCurso from "../components/cardCurso";
import { FavoritosContext } from "../context/FavoritosContext";
import "./home.scss";

const detalhesFixos = [
  {
    title: "Língua Portuguesa",
    body: "Desenvolvimento de leitura, interpretação de texto, gramática e escrita.",
    detalhes:
      "Neste componente, os estudantes desenvolvem leitura, interpretação textual, gramática, ortografia e produção escrita. O objetivo é fortalecer a comunicação, a compreensão de textos e a capacidade de argumentação.",
  },
  {
    title: "Matemática",
    body: "Raciocínio lógico e resolução de problemas.",
    detalhes:
      "Neste curso, os alunos revisam operações básicas, frações, porcentagem, equações e problemas matemáticos. O foco está no raciocínio lógico e na construção de uma base sólida para os estudos.",
  },
  {
    title: "Ciências da Natureza",
    body: "Compreensão de fenômenos naturais.",
    detalhes:
      "Os estudantes entram em contato com conteúdos introdutórios de biologia, física e química, desenvolvendo pensamento científico e compreensão de fenômenos do cotidiano.",
  },
  {
    title: "Oficinas de Redação",
    body: "Produção textual e argumentação.",
    detalhes:
      "As oficinas trabalham estrutura textual, coesão, coerência e argumentação. O estudante aprende a organizar melhor as ideias e produzir textos mais claros e bem construídos.",
  },
  {
    title: "Orientação Acadêmica",
    body: "Apoio ao percurso escolar.",
    detalhes:
      "Esse acompanhamento ajuda os estudantes na organização da rotina de estudos, no planejamento acadêmico e na adaptação ao ambiente escolar, fortalecendo autonomia e disciplina.",
  },
  {
    title: "Acompanhamento Psicopedagógico",
    body: "Suporte ao desenvolvimento do estudante.",
    detalhes:
      "Oferece apoio ao processo de aprendizagem, identificando dificuldades e auxiliando o estudante em seu desenvolvimento acadêmico e pessoal durante a formação.",
  },
];

function Home() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const { favoritos } = useContext(FavoritosContext);

  useEffect(() => {
    async function buscarCursos() {
      try {
        setLoading(true);
        setErro("");

        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os cursos.");
        }

        const dados = await resposta.json();

        const cursosFormatados = dados.slice(0, 6).map((item, index) => ({
          id: item.id,
          title: detalhesFixos[index].title,
          body: detalhesFixos[index].body,
          detalhes: detalhesFixos[index].detalhes,
        }));

        setCursos(cursosFormatados);
      } catch (error) {
        setErro(error.message || "Ocorreu um erro ao carregar os cursos.");
      } finally {
        setLoading(false);
      }
    }

    buscarCursos();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <h1>Partiu IF</h1>
        <p className="sub">Carregando cursos...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="container">
        <h1>Partiu IF</h1>
        <p className="sub erro">{erro}</p>
      </div>
    );
  }

  if (cursos.length === 0) {
    return (
      <div className="container">
        <h1>Partiu IF</h1>
        <p className="sub">Nenhum curso encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Partiu IF</h1>
      <p className="sub">Cursos e atividades de apoio oferecidos pelo programa</p>

      <div className="grid">
        {cursos.map((curso) => (
          <CardCurso key={curso.id} curso={curso} />
        ))}
      </div>

      <div className="bottom-actions">
        <Link to="/favoritos">
          <button className="btn-padrao">
            Ir para Favoritos ({favoritos.length})
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;