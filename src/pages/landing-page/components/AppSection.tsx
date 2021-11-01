import Styles from './AppSection.styled';
import AppDemo from '../../../assets/app-demo.png';

const AppSection = () => {
    return (
        <Styles className="app-section-wrapper">
            <section className="app-section-padding">
                <article className="app-section-article left">
                    <h2 className="app-section-h1">
                        The App that will help you reach your literary goals
                    </h2>
                    <p className="app-section-p">
                        Due to the daily tasks, we tend to leave our book
                        aside...{' '}
                        <span>
                            <b>BookTime</b>
                        </span>{' '}
                        will help you not get sloppy with your reading.
                    </p>
                </article>
                <article className="app-section-article right">
                    <img
                        src={AppDemo}
                        className="app-section-img"
                        alt="app-demo"
                        height="550px"
                    />
                </article>
            </section>
            <footer className="app-section-footer">
                <p className="app-section-p flag">
                    🇵🇹 A fully <br className="br" />
                    <b> Portuguese </b> App 🇵🇹
                </p>
            </footer>
        </Styles>
    );
};

export default AppSection;
