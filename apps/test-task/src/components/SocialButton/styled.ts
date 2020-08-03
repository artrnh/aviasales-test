import styled, {css} from 'styled-components';

import {
    FacebookShareButton,
    OKShareButton,
    TwitterShareButton,
    VKShareButton,
} from 'react-share';

import {Soc} from './SocialButton';

export const buttonStyles = css<{soc: Soc; disabled: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 53px;
    height: 53px;

    background-color: ${(props) =>
        props.theme.colors.social[props.soc]} !important;

    border: none;
    border-radius: 50%;
    outline: none;

    transition: transform 0.2s;

    ${(props) =>
        !props.disabled &&
        css`
            :hover {
                transform: scale(1.1);
            }
        `}

    ${(props) =>
        props.disabled &&
        css`
            opacity: 1 !important;
        `}
`;

export const FacebookButton = styled(FacebookShareButton)`
    ${buttonStyles}
`;

export const TwitterButton = styled(TwitterShareButton)`
    ${buttonStyles}
`;

export const VkButton = styled(VKShareButton)`
    ${buttonStyles}
`;

export const OkButton = styled(OKShareButton)`
    ${buttonStyles}
`;
