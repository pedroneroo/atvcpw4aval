import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardCurso from "../components/cardCurso";
import { FavoritosContext } from "../context/FavoritosContext";
import "./home.scss";

const detalhesFixos = [
  {
    title: "Língua Portuguesa",
    body: "Desenvolvimento de leitura, interpretação de texto, gramática e escrita.",
    cargaHoraria: "60 horas",
    conteudos:
      "Leitura e interpretação de diferentes gêneros textuais, gramática aplicada ao uso da língua, ortografia, pontuação, coesão e coerência textual, além da produção escrita com foco em clareza e argumentação.",
    detalhes:
      "Neste curso, os estudantes desenvolvem habilidades essenciais para a compreensão e produção de textos em diferentes contextos. Ao longo das atividades, são trabalhados aspectos fundamentais da língua portuguesa, como interpretação, organização de ideias e uso adequado da gramática. O objetivo é fortalecer a comunicação escrita e oral, preparando o estudante para situações acadêmicas, provas e o cotidiano.",
  },
  {
    title: "Matemática",
    body: "Raciocínio lógico e resolução de problemas.",
    cargaHoraria: "60 horas",
    conteudos:
      "Operações básicas, frações, porcentagem, razão e proporção, equações, noções de geometria e resolução de problemas contextualizados.",
    detalhes:
      "O curso de Matemática tem como foco o desenvolvimento do raciocínio lógico e a consolidação de conteúdos fundamentais. Os estudantes aprendem a interpretar problemas, aplicar conceitos matemáticos e desenvolver estratégias de resolução. A proposta é tornar a matemática mais acessível, conectando os conteúdos com situações práticas do dia a dia e fortalecendo a base para estudos futuros.",
  },
  {
    title: "Ciências da Natureza",
    body: "Compreensão de fenômenos naturais.",
    cargaHoraria: "50 horas",
    conteudos:
      "Noções introdutórias de biologia, física e química, corpo humano, meio ambiente, energia, matéria e suas transformações.",
    detalhes:
      "Neste curso, os estudantes entram em contato com os principais conceitos das Ciências da Natureza, desenvolvendo curiosidade científica e pensamento crítico. Os conteúdos são apresentados de forma contextualizada, permitindo a compreensão de fenômenos naturais presentes no cotidiano. O objetivo é aproximar teoria e prática, incentivando a observação, o questionamento e a construção do conhecimento científico.",
  },
  {
    title: "Oficinas de Redação",
    body: "Produção textual e argumentação.",
    cargaHoraria: "40 horas",
    conteudos:
      "Estrutura textual, gêneros textuais, coesão, coerência, construção de argumentos e produção de textos dissertativos.",
    detalhes:
      "As Oficinas de Redação são voltadas para o desenvolvimento da escrita e da capacidade argumentativa. Os estudantes aprendem a organizar ideias, estruturar textos e defender pontos de vista de forma clara e coerente. A prática constante de produção e revisão textual contribui para o aprimoramento da escrita, preparando o aluno para avaliações, vestibulares e outras situações que exigem boa comunicação.",
  },
  {
    title: "Orientação Acadêmica",
    body: "Apoio ao percurso escolar.",
    cargaHoraria: "30 horas",
    conteudos:
      "Planejamento de estudos, organização da rotina, estratégias de aprendizagem, gestão do tempo e desenvolvimento da autonomia.",
    detalhes:
      "A Orientação Acadêmica tem como objetivo auxiliar o estudante na construção de uma rotina de estudos mais eficiente. São trabalhadas estratégias para organização do tempo, planejamento de atividades e melhoria do desempenho escolar. O curso também contribui para o desenvolvimento da autonomia e da responsabilidade, ajudando o aluno a lidar melhor com suas demandas acadêmicas.",
  },
  {
    title: "Acompanhamento Psicopedagógico",
    body: "Suporte ao desenvolvimento do estudante.",
    cargaHoraria: "35 horas",
    conteudos:
      "Processos de aprendizagem, identificação de dificuldades escolares, estratégias de intervenção e desenvolvimento pessoal e acadêmico.",
    detalhes:
      "O Acompanhamento Psicopedagógico oferece suporte ao estudante em seu processo de aprendizagem, considerando suas necessidades individuais. O foco está na identificação de dificuldades e na construção de estratégias que favoreçam o desenvolvimento acadêmico e emocional. Esse acompanhamento contribui para melhorar o desempenho escolar, fortalecer a autoestima e promover uma relação mais positiva com os estudos.",
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
          cargaHoraria: detalhesFixos[index].cargaHoraria,
          conteudos: detalhesFixos[index].conteudos,
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