import Styles from './AboutMe.styled';
import AboutMeImg from '../../../assets/about-me.png';

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
        </Styles>
    );
};

export default AboutMe;
