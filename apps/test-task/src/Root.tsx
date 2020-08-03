import React from 'react';

import {Provider} from 'react-redux';
import {createGlobalStyle} from 'styled-components';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import {configureStore} from 'test-task/store/configureStore';

import {Container} from 'test-task/components';

import {Actions} from 'test-task/screens/Actions';
import {Final} from 'test-task/screens/Final';

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

const store = configureStore();

export const Root: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Container>
                    <GlobalStyle />

                    <Switch>
                        <Route path="/final" exact component={Final} />
                        <Route path="/actions" exact component={Actions} />

                        <Redirect from="/" to="/actions" />
                    </Switch>
                </Container>
            </Router>
        </Provider>
    );
};

export default Root;
