import styled from 'styled-components';
import { colors } from '../utils/colors';

const styles = styled.article`
    padding: 10px 25px;
    background-color: ${(props) => props.color};
    color: ${colors.darkBlue};
    max-width: 70%;
    border-radius: 5px;
`;

export default styles;
