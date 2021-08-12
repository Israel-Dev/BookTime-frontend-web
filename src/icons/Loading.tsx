import { ReactComponent as LoadingIcon } from '../assets/loading-icon.svg';
import Styles from './Loading.styles';

const Loading = () => {
    return (
        <Styles className="loading-wrapper">
            <LoadingIcon fill={'white'} className="loading-icon" />
        </Styles>
    );
};

export default Loading;
