import styled from 'styled-components';
import { colors, gradients } from '../utils/colors';

const styles = styled.button`
    height: 100%;
    width: 140px;
    border: none;
    border-radius: 25px;
    outline: 0;
    background: ${gradients.yellowToPurple};
    color: white;
    font-size: 15px;
    font-weight: 600;
    transition: all ease-in-out 0.2s;

    :hover {
        cursor: pointer;
        transform: scale(1.04);
        transition: all ease-in-out 0.2s;
    }

    :active {
        background: ${colors.lightPink};
        color: ${colors.darkBlue};
    }
`;

export default styles;
