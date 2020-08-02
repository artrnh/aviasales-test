import React, {useState, useCallback, ChangeEvent} from 'react';

import {Input} from 'test-task/components';

import {Wrapper, Form, Label, Button, Check} from './styled';

const Email: React.FC = (props) => {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {value} = e.target;

            const emailRegex = /\S+@\S+\.\S+/;
            if (value.match(emailRegex)) setValid(true);
            else setValid(false);

            setValue(value);
        },
        [setValue, setValid]
    );

    const emailSent = false;

    return (
        <Wrapper>
            {emailSent && <Check />}

            <Form emailSent={emailSent}>
                <Label emailSent={emailSent}>Оставь почту:</Label>
                <Input value={value} onChange={handleChange} disabled={emailSent} />
                <Button disabled={!valid}>Отправить</Button>
            </Form>
        </Wrapper>
    );
};

export {Email};
