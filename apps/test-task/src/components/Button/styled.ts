import styled from 'styled-components';

export const Wrapper = styled.button`
    min-width: 230px;

    padding: 9px 0 19px;

    font-family: 'Shnobel';
    font-weight: normal;
    font-size: 40px;
    line-height: 42px;
    text-align: center;

    color: #7f4156;
    background-color: white;

    border: 2px solid white;
    border-radius: 35px;
    outline: none;

    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;

    :hover {
        color: white;
        background-color: #7f4156;
        border-color: #7f4156;
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
