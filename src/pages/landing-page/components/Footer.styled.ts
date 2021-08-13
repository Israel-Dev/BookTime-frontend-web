import styled from 'styled-components';
import { colors } from '../../../utils/colors';

const styles = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.purple};

    .footer-padding {
        width: 100%;
        height: 150px;
        max-width: 1366px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }

    .footer-icon-section {
        width: 30%;
        display: flex;
        justify-content: space-evenly;
    }

    .footer-icon {
        height: 35px;
    }

    .footer-line-span {
        width: 100%;
        border-bottom: solid 1px white;
    }

    .footer-paragraph {
        margin: 0;
        padding: 0;
        color: white;
    }
`;

export default styles;
