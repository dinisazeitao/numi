type ProjetoInfo = { nome: string; url: string };

export function DescricaoProjetos()() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>

      <p className="text-base mb-4">
        Trabalhos desenvolvidos na aula de DIW em 2025. {" "}
        <a
          href="https://github.com/dinisazeitao" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Minha Página no GitHub Pages
        </a>.
      </p>

      {/* Utilização dos componentes Projeto */}
      <Projeto nome="Loja Virtual" url="https://dinisazeitao.github.io/" />
    </div>
  );
}