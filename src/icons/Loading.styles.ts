import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg);
    }
`;

const styles = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100%;

    .loading-icon {
        height: 80%;
        color: white;
        animation: ${rotation} 2s linear infinite;
    }
`;

export default styles;
