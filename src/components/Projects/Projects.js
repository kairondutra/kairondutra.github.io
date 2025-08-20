import React from 'react';
import './Projects.css';

const projectsList = [
    {
        id: 1,
        title: 'QuickLogin - Automatizador de Contas',
        description: 'Aplicação desktop em Python que automatiza o login seguro de múltiplas contas com PyAutoGUI, protegendo os dados com criptografia AES-128.',
        image: '/images/gestor-login.png',
        tags: ['Python', 'PyAutoGUI', 'CustomTkinter', 'Cryptography', 'SQLite'],
        liveUrl: '#',
        githubUrl: 'soon'
    },
    {
        id: 2,
        title: 'Digital Store - E-commerce em React',
        description: 'Interface de e-commerce responsiva, baseada em um design Figma e construída com React, React Router e a biblioteca de componentes PrimeReact.',
        image: '/images/digital-store.png',
        tags: ['React', 'Vite', 'React Router', 'PrimeReact'],
        liveUrl: 'https://kairondutra.github.io/projeto-digital-store',
        githubUrl: 'https://github.com/kairondutra/projeto-digital-store'
    },
    {
        id: 3,
        title: 'API REST para E-commerce',
        description: 'API RESTful robusta para um sistema de e-commerce, desenvolvida com Node.js e Sequelize, implementando arquitetura MVC e autenticação segura com JWT.',
        image: '/images/api-model.svg',
        tags: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
        liveUrl: '#',
        githubUrl: 'https://github.com/kairondutra/projeto-backend-gt'
    }
];

function Projects() {
    return (
        <section id="projects" className='projects-container'>
            <h2>Projetos</h2>
            <div className="projects-grid">
                {projectsList.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={`Screenshot do projeto ${project.title}`} />

                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {/* O botão "Ver Online" */}
                                {project.liveUrl !== '#' && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                                        Ver Online
                                    </a>
                                )}

                                {/* Lógica para o botão do GitHub */}
                                {project.githubUrl === 'soon' ? (
                                    // if link == 'soon': disabled button
                                    <button className="btn btn-disabled" disabled>Código (Em Breve)</button>
                                ) : (
                                    // else: normal link
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                                        Código Fonte
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;