import styled from 'styled-components';

const styles = styled.section`
    width: 100%;
    top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;

    .app-section-padding {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1366px;
        overflow: hidden;
    }

    .app-section-article {
        width: 50%;
    }

    .left {
        padding-left: 25px;
    }

    .right {
        text-align: right;
    }

    .app-section-p {
        font-size: 20px;
    }

    .flag {
        text-align: center;
    }

    .br {
        display: none;
    }

    @media (max-width: 600px) {
        text-align: center;

        .app-section-padding {
            flex-direction: column;
        }

        .app-section-article {
            width: 90%;
        }

        .app-section-p {
            text-align: center;
            font-size: 17px;
        }

        .app-section-img {
            height: 400px;
        }

        .app-section-footer {
            width: 85%;
        }

        .br {
            display: block;
        }
    }
`;

export default styles;
