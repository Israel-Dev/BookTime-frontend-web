import Styles from './AboutMe.styled';
import AboutMeImg from '../../../assets/about-me.png';
import bookOverlay from '../../../assets/book-shape-overlay.svg';

const AboutMe = () => {
    return (
        <Styles className="about-me-wrapper">
            <section className="about-me-padding">
                <img
                    src={AboutMeImg}
                    className="about-me-image"
                    alt="about-me"
                />
                <article className="about-me-article">
                    <h3>Sobre mim</h3>
                    <p>
                        Olá! Chamo-me Israel Silva e sou um apaixonado por
                        livros, programação e auto desenvolvimento. Então,
                        decidi juntar tudo e desenvolver uma app que nos
                        apoia-se a mantêr a consistência nas nossas leituras!
                    </p>
                </article>
            </section>
            <img
                src={bookOverlay}
                alt="about-me-book-overlay"
                className="about-me-book-overlay"
            />
        </Styles>
    );
};

export default AboutMe;
