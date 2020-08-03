import React from 'react';

import url from 'url';

import {deviceWidths} from 'test-task/theme';

import {useWindowWidth} from './hooks';
import {Wrapper, Logo, SmallLogo} from './styled';

const Container: React.FC = (props) => {
    const {children} = props;

    const windowWidth = useWindowWidth();

    const aviasalesUrl = url.format({
        protocol: 'https',
        hostname: 'aviasales.ru',
    });

    const LogoComponent = windowWidth < deviceWidths.mobileL ? SmallLogo : Logo;

    return (
        <Wrapper>
            <a href={aviasalesUrl}>
                <LogoComponent />
            </a>

            {children}
        </Wrapper>
    );
};

export {Container};
