import styled from 'styled-components';
import { colors } from '../../../utils/colors';

const styles = styled.section`
    width: 100%;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colors.lightBlue};

    .app-stores-article {
        width: 85%;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .app-stores-article-footer {
        width: 100%;
        max-width: 1000px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    @media (max-width: 600px) {
        padding: 60px 0;

        .app-stores-article-footer {
            flex-direction: column;
        }

        .app-store-logo {
            margin-bottom: 15px;
        }

        img {
            height: auto;
            width: 60vw;
            max-width: 200px;
        }
    }
`;

export default styles;
