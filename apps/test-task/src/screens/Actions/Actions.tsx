import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {createUser, getUser} from 'test-task/store/modules/user';

import {Social, Email} from './components';
import {Wrapper, Title} from './styled';

const Actions: React.FC = (props) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    useEffect(() => {
        const savedUserId = localStorage.getItem('userId');

        if (!savedUserId) dispatch(createUser());
        else dispatch(getUser(savedUserId));
    }, [dispatch]);

    if (!user) return null;

    const {shared, email} = user;
    if (shared && !!email) return <Redirect to="/final" />;

    return (
        <Wrapper>
            <Title>Чтобы выиграть путешествие</Title>

            <Social />
            <Email />
        </Wrapper>
    );
};

export {Actions};
