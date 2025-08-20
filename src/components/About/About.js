import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className='about-container'>
            <h2>Sobre Mim</h2>
            <div className="about-content">
                <div className='about-image-column'>
                    <img src="/images/profile-photo.jpg" alt="Foto de perfil de Kairon Dutra" />
                </div>
                <div className="about-text-column">
                    <p>
                        Olá! Sou Kairon Dutra, um entusiasta de tecnologia e desenvolvedor de software focado em criar soluções criativas e intuitivas. Minha jornada na programação começou com a curiosidade de entender como transformar ideias complexas em experiências digitais simples e eficazes.
                    </p>
                    <p>
                        Minha primeira experiência relevante foi em um ambiente online dinâmico, onde desenvolvi habilidades essenciais de comunicação e suporte técnico. Atuando como moderador e redator técnico na comunidade PokeXGames, prestei suporte a milhares de jogadores, mediei conflitos e criei documentação (guias e FAQs) que aumentaram a autonomia dos usuários e otimizaram o tempo da equipe.
                    </p>
                    <p>
                        Atualmente, estou aprofundando meus conhecimentos em React e no ecossistema JavaScript, buscando oportunidades para colaborar em projetos desafiadores e continuar crescendo como desenvolvedor.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;