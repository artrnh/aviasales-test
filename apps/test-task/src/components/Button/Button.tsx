import React from 'react';

import {Wrapper} from './styled';

interface Props {
    disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
    const {children} = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

Button.defaultProps = {
    disabled: false,
};

export {Button};
