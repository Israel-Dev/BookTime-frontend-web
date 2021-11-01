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
                    <h3>About me</h3>
                    <p>
                        Hi! My name is Israel Silva and I am passionate about
                        books, programming and self development. So, I decided
                        to put it all together and develop an app that supports
                        us in maintaining consistency in our readings!
                    </p>
                </article>
            </section>
        </Styles>
    );
};

export default AboutMe;
