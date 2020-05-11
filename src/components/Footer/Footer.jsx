import React from 'react';
import './Footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by <a href="https://github.com/gentlemil/">Gentlemil</a>.</p>
                <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/miloszbukala"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/gentlemil"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;