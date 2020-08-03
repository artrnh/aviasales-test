import styled from 'styled-components';

import {buttonFont} from 'test-task/theme/fonts';

export const Wrapper = styled.button`
    min-width: 230px;

    padding: 9px 0 19px;

    ${buttonFont}

    color: ${(props) => props.theme.colors.darkPink};
    background-color: white;

    border: 2px solid white;
    border-radius: 35px;
    outline: none;

    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;

    :hover {
        color: white;
        background-color: ${(props) => props.theme.colors.darkPink};
        border-color: ${(props) => props.theme.colors.darkPink};
    }

    :disabled {
        color: white;
        background-color: transparent;

        opacity: 0.7;

        cursor: default;

        :hover {
            border-color: white;
        }
    }
`;
