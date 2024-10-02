"use client";

import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { projects } from './data/projects';
import Image from 'next/image';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-800 to-black min-h-screen text-white flex flex-col justify-center items-center">
      <Head>
        <title>Vinícius | Portfólio</title>
        <meta name="description" content="Portfólio de Vinícius, Desenvolvedor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(128,0,128,0.1)20%,transparent 20%)] 
                      bg-[length:75px_75px] opacity-10 pointer-events-none"></div>

      <header className="absolute top-0 w-full p-5 flex justify-between items-center bg-transparent">
        <h1 className="text-3xl font-bold text-purple-500">vinicius.dev</h1>
        {/* <Image src="/assets/header_image_transparent.png" alt="vinicius.dev" width={500} height={300} className="text-3xl font-bold text-purple-500" /> */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#about" className="hover:text-purple-400">Sobre</a></li>
            <li><a href="#projects" className="hover:text-purple-400">Projetos</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col justify-center items-center text-center px-6 relative z-10 min-h-screen">
        
        <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <Typewriter
            options={{
              strings: ["Olá, eu sou Vinícius!"],
              autoStart: true,
              loop: false, 
              cursor: "_",  
              delay: 75,  
              deleteSpeed: Infinity,
            }}
          />
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          Desenvolvedor Fullstack com foco em tecnologias inovadoras.
        </p>

        <a
          href="#projects"
          className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition-shadow shadow-lg shadow-purple-500/50"
        >
          Veja meus Projetos
        </a>
      </main>

      <section id="projects" className="relative bg-gradient-to-br from-gray-900 via-black-800 to-gray w-full p-10 md:p-20 text-center">
        <h3 className="text-3xl font-semibold mb-8 text-white-400">Projetos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Link key={index} href={project.link ?? ""}>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition transform shadow-md shadow-purple-500/40 cursor-pointer">
              <h4 className="text-xl font-bold mb-2">{project.titulo ?? ""}</h4>
              <p className="text-sm text-gray-400">{project.descricao ?? ""}</p>
            </div>
          </Link>
        ))}
        </div>
      </section>

      <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-purple-800 to-black w-full p-10 md:p-20 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-white-400">Contato</h3>
        <p className="text-lg md:text-xl text-white-300">
          Entre em contato pelo e-mail{' '}
          <a href="mailto:vinicius@example.com" className="text-purple-400 hover:underline">
            viniciusferreirarosario5@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
