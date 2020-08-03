import styled from 'styled-components';

import {device} from 'test-task/theme';
import {titleFont} from 'test-task/theme/fonts';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 410px;
`;

export const Title = styled.h1`
    margin: 0;
    margin-bottom: 20px;

    padding-left: 30px;

    ${titleFont}

    @media ${device.mobileL} {
        font-size: 27px;
        line-height: 28px;
    }
`;
