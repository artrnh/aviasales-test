import React from 'react';

import {Wrapper} from './styled';

interface Props {
    value?: string;
    initialValue?: string;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    disabled?: boolean;
}

const Input: React.FC<Props> = (props) => {
    const {children} = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

Input.defaultProps = {
    value: '',
    onChange: () => null,
    disabled: false,
};

export {Input};
