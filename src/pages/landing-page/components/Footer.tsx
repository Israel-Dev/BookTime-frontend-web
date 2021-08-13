import Styles from './Footer.styled';
import LinkedIn from '../../../assets/linkedin.png';
import Email from '../../../assets/email.png';
import Instagram from '../../../assets/instagram.png';

const Footer = () => {
    return (
        <Styles className="footer-wrapper">
            <section className="footer-padding">
                <section className="footer-icon-section">
                    <img
                        src={LinkedIn}
                        alt="linked-in"
                        className="footer-icon"
                    />
                    <img src={Email} alt="email" className="footer-icon" />
                    <img
                        src={Instagram}
                        alt="instagram"
                        className="footer-icon"
                    />
                </section>
                <span className="footer-line-span" />
                <footer className="footer-footer">
                    <p className="footer-paragraph">
                        Copyright © 2021 Israel SIlva - Todos os direitos
                        reservados
                    </p>
                </footer>
            </section>
        </Styles>
    );
};

export default Footer;
