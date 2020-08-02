import React from 'react';

import {Social, Email} from './components';
import {Wrapper, Title} from './styled';

const Actions: React.FC = (props) => {
    return (
        <Wrapper>
            <Title>Чтобы выиграть путешествие</Title>

            <Social />
            <Email />
        </Wrapper>
    );
};

export {Actions};
