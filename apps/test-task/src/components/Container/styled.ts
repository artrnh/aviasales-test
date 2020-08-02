import styled from 'styled-components';

import {Logo as _Logo} from 'test-task/assets/icons';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    background-image: url('../../../assets/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Logo = styled(_Logo)`
    position: absolute;
    top: 30px;
    left: 30px;
`;
