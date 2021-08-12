import { ReactComponent as SuccessIcon } from '../assets/success-icon.svg';
import { colors } from '../utils/colors';
import Styles from './Success.styles';

const Success = () => {
    return (
        <Styles className="success-wrapper">
            <SuccessIcon fill={colors.green} className="success-icon" />
        </Styles>
    );
};

export default Success;
