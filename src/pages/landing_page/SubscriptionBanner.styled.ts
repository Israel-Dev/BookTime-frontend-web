import styled from 'styled-components';
import { colors } from '../../utils/colors';

const styles = styled.section`
    position: relative;
    overflow: hidden;
    height: 555px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.purple};
    color: white;
    text-align: center;

    .subscription-banner-header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .subscription-banner-p {
        color: ${colors.yellow};
        font-size: 20px;
        margin: 0;
    }

    .subscription-banner-h1 {
        font-size: 70px;
        font-weight: normal;
        margin: 10px 0;
    }

    .subscription-banner-header,
    .subscription-banner-line-separator,
    .subscription-banner-section {
        z-index: 10;
    }

    .subscription-banner-section {
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

    .subscription-banner-background-image {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export default styles;
