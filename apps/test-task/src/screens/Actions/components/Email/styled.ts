import styled, {css} from 'styled-components';

import {Button as _Button} from 'test-task/components';
import {CheckIcon} from 'test-task/assets/icons';

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

        font-family: 'Shnobel';
        font-size: 44px;
        line-height: 46px;
        font-weight: normal;
        text-align: center;
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
`;

export const Check = styled(CheckIcon)`
    position: absolute;

    left: 30px;
    top: 0;

    width: 20px;
    height: 20px;

    padding-bottom: 2px;

    background-color: #7f4156;
`;
