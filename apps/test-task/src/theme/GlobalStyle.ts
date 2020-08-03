import {createGlobalStyle} from 'styled-components';

import {primaryFont} from './fonts';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Shnobel';
        src: url('../assets/fonts/Shnobelregular.woff2') format('woff2'),
            url('../assets/fonts/Shnobelregular.woff') format('woff'), 
            url('../assets/fonts/Shnobelregular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;

        background-color: ${(props) => props.theme.colors.pink};

        ${primaryFont}
    }
`;

export {GlobalStyle};
