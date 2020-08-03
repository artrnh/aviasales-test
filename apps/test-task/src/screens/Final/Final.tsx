import React from 'react';

import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Wrapper, Title, CrossedOut, Big} from './styled';

const Final: React.FC = (props) => {
    const user = useSelector((state) => state.user);

    const {shared, email} = user;
    if (!shared || !email) return <Redirect to="/actions" />;

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
