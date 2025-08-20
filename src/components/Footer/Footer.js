// Em: src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <p className="footer-text">
                &copy; {new Date().getFullYear()} Kairon Dutra. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;