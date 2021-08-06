import Styles from './SubscriptionBanner.styled';
import lineSeparator from '../../assets/line-separator.svg';
import books from '../../assets/books.png';
import bookOverlay from '../../assets/book-shape-overlay.svg';
import Input from '../../common/Input';

const SubscriptionBanner = () => {
    return (
        <Styles className="subscription-banner-wrapper">
            <header className="subscription-banner-header">
                <p className="subscription-banner-p">App de Leitura</p>
                <h1 className="subscription-banner-h1 courgette">BookTime</h1>
            </header>
            <img
                src={lineSeparator}
                alt="linie-separator"
                className="subscription-banner-line-separator"
            />
            <section className="subscription-banner-section">
                <p>Um pouco a cada dia, muito a cada semana</p>
                <Input
                    showButton={true}
                    handleSubmit={() => {}}
                    label="Subscrever"
                    placeholder="Introduza aqui o seu email"
                />
                <p>Fique a saber assim que a app for lançada!</p>
            </section>
            <img
                src={books}
                alt="booktime-background"
                className="subscription-banner-background-image"
            />
            <img
                src={bookOverlay}
                alt="subscription-banner-book-overlay"
                className="subscription-banner-book-overlay"
            />
        </Styles>
    );
};

export default SubscriptionBanner;
