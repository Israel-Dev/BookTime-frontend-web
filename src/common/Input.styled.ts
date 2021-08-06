import styled from 'styled-components';
import { colors } from '../utils/colors';

const styles = styled.article`
    position: relative;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    .input {
        height: 100%;
        width: 90%;
        padding: 0;
        padding-left: 35px;
        box-sizing: border-box;
        border: 3px solid ${colors.yellow};
        border-radius: 25px;
    }

    .input:focus {
        outline: none;
    }

    input::placeholder {
        font-family: 'Poppins', sans-serif;
        color: ${colors.purple};
    }

    .input-button-article {
        position: absolute;
        right: 0;
        height: 100%;
    }
`;

export default styles;
