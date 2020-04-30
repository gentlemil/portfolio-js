import React from 'react';
import './Footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by <a href="#">Gentlemil</a>.</p>
                <ul className="social-icons">
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;