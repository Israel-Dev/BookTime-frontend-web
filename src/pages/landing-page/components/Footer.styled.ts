import styled from 'styled-components';
import { colors } from '../../../utils/colors';

const styles = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.purple};

    .footer-padding {
        width: 100%;
        height: 150px;
        max-width: 1366px;
        padding-top: 10vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }

    .footer-icon-section {
        width: 50vw;
        max-width: 350px;
        display: flex;
        justify-content: space-evenly;
    }

    .footer-icon {
        height: 35px;
    }

    .footer-line-span {
        width: 80%;
        border-bottom: solid 1px white;
    }

    .footer-paragraph {
        text-align: center;
        margin: 0;
        padding: 0;
        color: white;
    }

    .footer-book-overlay {
        width: 100%;
        position: absolute;
        transform: rotate(180deg);
        top: -11vw;
    }

    .footer-footer {
        width: 85%;
    }

    @media (max-width: 600px) {
        .footer-paragraph {
            font-size: 14px;
        }
    }
`;

export default styles;
