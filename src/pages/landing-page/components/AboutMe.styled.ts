import styled from 'styled-components';

const styles = styled.section`
    position: relative;
    padding: 75px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .about-me-article {
        width: 50%;
        padding-left: 75px;
    }

    .about-me-image {
        height: 350px;
    }

    .about-me-padding {
        width: 100%;
        max-width: 1366px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        z-index: 10;
    }

    .about-me-book-overlay {
        width: 100%;
        position: absolute;
        transform: rotate(180deg);
        bottom: -180px;
    }
`;

export default styles;
