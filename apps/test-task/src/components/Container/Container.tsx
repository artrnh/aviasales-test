import React from 'react';

import url from 'url';

import {Wrapper, Logo} from './styled';

const Container: React.FC = (props) => {
    const {children} = props;

    const aviasalesUrl = url.format({protocol: 'https', hostname: 'aviasales.ru'});

    return (
        <Wrapper>
            <a href={aviasalesUrl}>
                <Logo title="logo" />
            </a>

            {children}
        </Wrapper>
    );
};

export {Container};
