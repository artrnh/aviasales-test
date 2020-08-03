import styled from 'styled-components';

import {inputFont} from 'test-task/theme/fonts';

export const Wrapper = styled.input`
    width: 100%;
    min-width: 200px;
    height: 50px;

    padding: 11px 28px 12px;

    background: white;
    border-radius: 25px;

    border: none;
    outline: none;

    ${inputFont}
`;
