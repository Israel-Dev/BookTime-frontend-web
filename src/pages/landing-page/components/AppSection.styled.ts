import styled from 'styled-components';

const styles = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .app-section-padding {
        position: absolute;
        top: -115px;
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

    .app-section-p {
        font-size: 20px;
    }
`;

export default styles;
