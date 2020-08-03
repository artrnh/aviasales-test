import React from 'react';

import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {RootState} from 'test-task/store/modules';

import {Wrapper, Title, CrossedOut, Big} from './styled';

const Final: React.FC = (props) => {
    const user = useSelector((state: RootState) => state.user);

    if (!user || !user.shared || !user.email) return <Redirect to="/actions" />;

    return (
        <Wrapper>
            <Title>
                <CrossedOut>Выборы</CrossedOut>
                <br />
                путешествие
                <br />
                <Big>близко!</Big>
            </Title>
        </Wrapper>
    );
};

export {Final};
