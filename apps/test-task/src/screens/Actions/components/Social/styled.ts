import styled, {css} from 'styled-components';

import {CheckIcon} from 'test-task/assets/icons';
import {device} from 'test-task/theme';
import {numbersFont} from 'test-task/theme/fonts';

export const Container = styled.div`
    position: relative;
`;

export const Wrapper = styled.div<{shared: boolean}>`
    width: 100%;

    margin-bottom: 20px;
    padding-left: 64px;
    padding-right: 46px;

    @media ${device.mobileL} {
        padding: 0 40px;
    }

    ${(props) =>
        props.shared &&
        css`
            opacity: 0.5;
        `}
`;

export const Label = styled.p<{shared: boolean}>`
    margin: 0;
    margin-top: 36px;
    margin-bottom: 14px;

    ::before {
        content: '1.';

        position: absolute;
        left: 0;
        top: 18px;

        ${numbersFont}
    }

    @media ${device.mobileL} {
        text-align: center;

        ::before {
            content: '1.';
            position: static;

            margin-right: 5px;

            font: inherit;
        }
    }

    ${(props) =>
        props.shared &&
        css`
            ::before {
                display: none;
            }
        `}
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 300px;
`;

export const Check = styled(CheckIcon)`
    position: absolute;

    left: 30px;
    top: 38px;

    width: 20px;
    height: 20px;

    padding-bottom: 2px;

    background-color: ${(props) => props.theme.colors.darkPink};
`;
