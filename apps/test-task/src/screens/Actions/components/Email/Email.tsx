import React, {useState, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {Input} from 'test-task/components';
import {updateUser} from 'test-task/store/modules/user';

import {Wrapper, Form, Label, Button, Check} from './styled';

const Email: React.FC = (props) => {
    const dispatch = useDispatch();

    const id = useSelector((state) => state.user.id);
    const email = useSelector((state) => state.user.email);

    const [value, setValue] = useState(email || '');
    const [valid, setValid] = useState(false);

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            dispatch(updateUser(id, {email: value}));
        },
        [dispatch, id, value]
    );

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

    return (
        <Wrapper>
            {!!email && <Check />}

            <Form onSubmit={handleSubmit} emailSent={!!email}>
                <Label emailSent={!!email}>Оставь почту:</Label>

                <Input
                    value={value}
                    onChange={handleChange}
                    disabled={!!email}
                />

                <Button disabled={!valid}>Отправить</Button>
            </Form>
        </Wrapper>
    );
};

export {Email};
