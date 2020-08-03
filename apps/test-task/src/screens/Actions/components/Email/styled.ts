import styled, {css} from 'styled-components';

import {Button as _Button} from 'test-task/components';
import {CheckIcon} from 'test-task/assets/icons';

import {device} from 'test-task/theme';
import {numbersFont} from 'test-task/theme/fonts';

export const Wrapper = styled.div`
    position: relative;
`;

export const Form = styled.form<{emailSent: boolean}>`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;

    padding-left: 64px;
    padding-right: 46px;

    @media ${device.mobileL} {
        padding: 0 40px;
    }

    ${(props) =>
        props.emailSent &&
        css`
            opacity: 0.5;
        `}
`;

export const Label = styled.p<{emailSent: boolean}>`
    margin: 0;
    margin-bottom: 15px;

    line-height: 18px;

    ::before {
        content: '2.';

        position: absolute;
        left: 0;
        top: -10px;

        ${numbersFont}
    }

    @media ${device.mobileL} {
        text-align: center;

        ::before {
            content: '2.';
            position: static;

            margin-right: 5px;

            font: inherit;
        }
    }

    ${(props) =>
        props.emailSent &&
        css`
            ::before {
                display: none;
            }
        `}
`;

export const Button = styled(_Button)`
    align-self: center;

    width: 230px;
    margin-top: 40px;

    @media ${device.mobileL} {
        font-size: 30px;
        line-height: 31px;

        ::after {
            content: '!';
        }
    }
`;

export const Check = styled(CheckIcon)`
    position: absolute;

    left: 30px;
    top: 0;

    width: 20px;
    height: 20px;

    padding-bottom: 2px;

    background-color: ${(props) => props.theme.colors.darkPink};
`;
