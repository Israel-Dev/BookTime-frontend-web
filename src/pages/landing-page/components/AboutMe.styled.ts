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

    /* @media (min-width: 1001px) {
        .about-me-book-overlay {
            bottom: -100px;
        }
    }

    @media (max-width: 1000px) {
        .about-me-book-overlay {
            bottom: -100px;
        }
    }

    @media (max-width: 900px) {
        .about-me-book-overlay {
            bottom: -80px;
        }
    }

    @media (max-width: 800px) {
        .about-me-book-overlay {
            bottom: -70px;
        }
    }

    @media (max-width: 680px) {
        .about-me-book-overlay {
            bottom: -55px;
        }
    }

    @media (max-width: 480px) {
        .about-me-book-overlay {
            bottom: -40px;
        }
    } */
`;

export default styles;
