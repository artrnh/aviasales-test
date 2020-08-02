import React from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import {Container} from 'test-task/components';

import {Actions} from './screens/Actions';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Shnobel';
        src: url('./assets/fonts/Shnobelregular.woff2') format('woff2'),
            url('./assets/fonts/Shnobelregular.woff') format('woff'), 
            url('./assets/fonts/Shnobelregular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;

        color: white;
        background-color: #CD718E;
    }
`;

export const Root: React.FC = () => {
    return (
        <Router>
            <Container>
                <GlobalStyle />

                <Switch>
                    <Route path="/final" exact component={Actions} />
                    <Route path="/actions" exact component={Actions} />

                    <Redirect from="/" to="/actions" />
                </Switch>
            </Container>
        </Router>
    );
};

export default Root;
