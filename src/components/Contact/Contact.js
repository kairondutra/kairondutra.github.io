import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className='contact-container'>
            <div className="contact-content">
                <h2>Vamos conversar?</h2>
                <p>
                    Estou sempre em busca de novos desafios e oportunidades. Se você gostou do meu trabalho ou tem alguma pergunta, sinta-se à vontade para entrar em contato!
                </p>

                <div className="contact-social-links">
                    <a
                        href="mailto:kairondutra@gmail.com"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/kairondutra"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kairondutra"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;