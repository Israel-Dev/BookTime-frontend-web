import { ReactComponent as FailedIcon } from '../assets/failed-icon.svg';
import { colors } from '../utils/colors';
import Styles from './Failed.styles';

const Failed = () => {
    return (
        <Styles className="Failed-wrapper">
            <FailedIcon fill={colors.red} className="failed-icon" />
        </Styles>
    );
};

export default Failed;
