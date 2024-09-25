import Head from 'next/head';
import Image from 'next/image';

export default function Projeto() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-800 to-black min-h-screen text-white">
      <Head>
        <title>Projeto 1 | Vinícius</title>
        <meta name="description" content="Detalhes do Projeto 1 por Vinícius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="p-5 flex justify-between items-center bg-transparent">
        <h1 className="text-3xl font-bold text-purple-500">vinicius.dev</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="/" className="hover:text-purple-400">Início</a></li>
            <li><a href="/#projects" className="hover:text-purple-400">Projetos</a></li>
            <li><a href="/#contact" className="hover:text-purple-400">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-10 md:p-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-purple-500 mb-4">Projeto 1</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Este projeto é uma aplicação web que permite aos usuários realizar tarefas específicas, com funcionalidades X, Y e Z.
        </p>

        {/* Project Media (Imagens ou Vídeos) */}
        <div className="my-10 flex justify-center items-center">
          {/* Exemplo de uso de imagem */}
          <Image
            src="/path-to-your-image.png" // Substituir pela imagem do projeto
            alt="Captura de tela do Projeto 1"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Links do projeto */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/seuusuario/projeto1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-500/50"
          >
            GitHub
          </a>
          <a
            href="https://projeto1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-500/50"
          >
            Acessar Projeto
          </a>
        </div>

        {/* Tecnologias Utilizadas */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Tecnologias Utilizadas</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-300">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </section>

        {/* Descrição Detalhada */}
        <section className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Descrição do Projeto</h3>
          <p className="text-lg text-gray-300 mb-6">
            O projeto foi desenvolvido para solucionar o problema X, utilizando as tecnologias mais modernas disponíveis. A arquitetura do sistema foi planejada para ser escalável, e o projeto foi otimizado para garantir a melhor performance possível.
          </p>
          <p className="text-lg text-gray-300">
            Durante o desenvolvimento, foram implementadas as seguintes funcionalidades:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Funcionalidade 1 - Breve descrição da funcionalidade.</li>
              <li>Funcionalidade 2 - Breve descrição da funcionalidade.</li>
              <li>Funcionalidade 3 - Breve descrição da funcionalidade.</li>
            </ul>
          </p>
        </section>
      </main>

      {/* Footer com navegação */}
      <footer className="p-10 text-center bg-gray-900">
        <a
          href="/"
          className="text-purple-400 hover:text-purple-300 transition text-lg"
        >
          ← Voltar para Início
        </a>
      </footer>
    </div>
  );
}
