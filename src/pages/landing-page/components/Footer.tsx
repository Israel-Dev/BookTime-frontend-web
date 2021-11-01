import Styles from './Footer.styled';
import LinkedIn from '../../../assets/linkedin.png';
import Email from '../../../assets/email.png';
import Instagram from '../../../assets/instagram.png';
import bookOverlay from '../../../assets/book-shape-overlay.svg';

const Footer = () => {
    return (
        <Styles className="footer-wrapper">
            <img
                src={bookOverlay}
                alt="footer-book-overlay"
                className="footer-book-overlay"
            />
            <section className="footer-padding">
                <section className="footer-icon-section">
                    <a
                        href="https://www.linkedin.com/in/israel-santos-silva-151652188/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={LinkedIn}
                            alt="linked-in"
                            className="footer-icon"
                        />
                    </a>
                    <a href="mailto: izrael37@gmail.com">
                        <img src={Email} alt="email" className="footer-icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/israel_silva37/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Instagram}
                            alt="instagram"
                            className="footer-icon"
                        />
                    </a>
                </section>
                <span className="footer-line-span" />
                <footer className="footer-footer">
                    <p className="footer-paragraph">
                        Copyright © 2021 Israel Silva - All rights reserved
                    </p>
                </footer>
            </section>
        </Styles>
    );
};

export default Footer;
