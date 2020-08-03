import React from 'react';

import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import {configureStore} from 'test-task/store/configureStore';
import {GlobalStyle, theme} from 'test-task/theme';

import {Container} from 'test-task/components';

import {Actions} from 'test-task/screens/Actions';
import {Final} from 'test-task/screens/Final';

const store = configureStore();

export const Root: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <Container>
                        <GlobalStyle />

                        <Switch>
                            <Route path="/final" exact component={Final} />
                            <Route path="/actions" exact component={Actions} />

                            <Redirect from="/" to="/actions" />
                        </Switch>
                    </Container>
                </ThemeProvider>
            </Router>
        </Provider>
    );
};

export default Root;
