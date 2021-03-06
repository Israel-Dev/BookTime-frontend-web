import styled from 'styled-components';
import { colors } from '../../../utils/colors';

const styles = styled.header`
    position: relative;
    overflow: hidden;
    height: 755px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.purple};
    color: white;
    text-align: center;

    .subscription-banner-header {
        margin-top: -70px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .subscription-banner-p {
        color: ${colors.yellow};
        margin: 0;
    }

    .subscription-banner-h1 {
        font-size: 70px;
        font-weight: normal;
        margin: 10px 0;
    }

    .subscription-banner-line-separator {
        max-width: 550px;
        width: 85%;
    }

    .subscription-banner-header,
    .subscription-banner-line-separator,
    .subscription-banner-section {
        z-index: 10;
    }

    .subscription-banner-section {
        width: 85%;
        max-width: 600px;
        height: 200px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }

    .subscription-banner-section p {
        font-size: 23px;
        margin: 0;
    }

    .subscription-banner-book-overlay {
        position: absolute;
        bottom: 0;
        width: 100%;
        transform: translateY(55%);
    }

    .subscription-banner-background-image {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    @media (max-width: 600px) {
        .subscription-banner-section {
            height: 300px;
        }

        .subscription-banner-h1 {
            font-size: 12vw;
        }

        .subscription-banner-section p {
            font-size: 17px;
        }
    }
`;

export default styles;
