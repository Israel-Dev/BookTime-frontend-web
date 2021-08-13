import Styles from './AppSection.styled';
import AppDemo from '../../../assets/app-demo.png';

const AppSection = () => {
    return (
        <Styles className="app-section-wrapper">
            <section className="app-section-padding">
                <article className="app-section-article left">
                    <h2 className="app-section-h1">
                        A App que vai ajudar-te a atingir as tuas metas
                        literárias
                    </h2>
                    <p className="app-section-p">
                        Devido aos afazeres do dia a dia, temos a tendência de
                        deixar o nosso livro de lado...{' '}
                        <span>
                            <b>BookTime</b>
                        </span>{' '}
                        irá ajudar-te a não te desleixares com a leitura.
                    </p>
                </article>
                <article className="app-section-article">
                    <img
                        src={AppDemo}
                        className="app-section-img"
                        alt="app-demo"
                        height="550px"
                    />
                </article>
            </section>
            <footer className="app-section-footer">
                <p>
                    🇵🇹 Uma App totalmente <b>Portuguesa</b> 🇵🇹
                </p>
            </footer>
        </Styles>
    );
};

export default AppSection;
