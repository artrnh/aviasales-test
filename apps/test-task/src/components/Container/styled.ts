import styled from 'styled-components';

import {Logo as _Logo, SmallLogo as _SmallLogo} from 'test-task/assets/icons';
import {device} from 'test-task/theme';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    background-image: url('../../../assets/images/clouds.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;

    @media ${device.mobileL} {
        justify-content: flex-start;
        height: auto;

        margin-top: 65px;

        background-position: 50% 0;
    }
`;

export const Logo = styled(_Logo)`
    position: absolute;
    top: 30px;
    left: 30px;
`;

export const SmallLogo = styled(_SmallLogo)`
    position: absolute;
    top: 10px;
    left: 10px;
`;
