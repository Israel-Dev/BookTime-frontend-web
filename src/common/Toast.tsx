import { RequestState } from '../types/common';
import { colors } from '../utils/colors';
import Styles from './Toast.styled';

interface IProps {
    type: RequestState.success | RequestState.failed;
    message: string | JSX.Element | null;
}

const Toast = (props: IProps) => {
    const { message, type } = props;

    const typeMapping = {
        [RequestState.failed]: colors.lightRed,
        [RequestState.success]: colors.lightGreen,
    };

    return (
        <Styles className="toast-wrapper" color={typeMapping[type]}>
            {message}
        </Styles>
    );
};

export default Toast;
