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

    .app-stores-article-footer {
        width: 100%;
        max-width: 1366px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export default styles;
