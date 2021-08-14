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

    @media (max-width: 600px) {
        .about-me-padding {
            flex-direction: column;
        }

        .about-me-image {
            height: auto;
            width: 85%;
            max-width: 350px;
        }

        .about-me-article {
            width: 85%;
            padding: 0;
            text-align: center;
        }
    }
`;

export default styles;
