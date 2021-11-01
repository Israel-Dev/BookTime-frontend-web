import Styles from './AppStores.styled';
import AppStoreImg from '../../../assets/app-store.png';
import GooglePlayImg from '../../../assets/google-play.png';

const AppStores = () => {
    return (
        <Styles className="app-stores-wrapper">
            <article className="app-stores-article">
                <h3>
                    It will be available for both <span>IOS</span> and{' '}
                    <span>Android</span>
                </h3>
                <footer className="app-stores-article-footer">
                    <img
                        src={AppStoreImg}
                        alt="app-store-icon"
                        height="50px"
                        className="app-store-logo"
                    />
                    <img
                        src={GooglePlayImg}
                        alt="app-store-icon"
                        height="50px"
                    />
                </footer>
            </article>
        </Styles>
    );
};

export default AppStores;
