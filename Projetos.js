function Projetos() {

  const projetos = [
    {
      nome: "Página de Apresentação",
      descricao: "Projeto com HTML e CSS",
      link: "#"
    },
    {
      nome: "Calculadora",
      descricao: "Projeto com JavaScript",
      link: "#"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div className="grid">
        {projetos.map((projeto, index) => (
          <div className="card" key={index}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link}>Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;