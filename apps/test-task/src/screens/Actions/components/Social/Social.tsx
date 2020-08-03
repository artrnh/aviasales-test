import React, {useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {SocialButton} from 'test-task/components';
import {RootState} from 'test-task/store/modules';
import {updateUser} from 'test-task/store/modules/user';

import {Container, Wrapper, Label, Buttons, Check} from './styled';

const Social: React.FC = (props) => {
    const dispatch = useDispatch();

    const id = useSelector((state: RootState) => state.user.id);
    const shared = useSelector((state: RootState) => state.user.shared);

    const handleShare = useCallback(() => {
        dispatch(updateUser(id, {shared: true}));
    }, [dispatch, id]);

    return (
        <Container>
            {shared && <Check />}

            <Wrapper shared={shared}>
                <Label shared={shared}>Поделись с друзьями:</Label>

                <Buttons>
                    <SocialButton
                        soc="vk"
                        disabled={shared}
                        onShareWindowClose={handleShare}
                    />

                    <SocialButton
                        soc="facebook"
                        disabled={shared}
                        onShareWindowClose={handleShare}
                    />

                    <SocialButton
                        soc="twitter"
                        disabled={shared}
                        onShareWindowClose={handleShare}
                    />

                    <SocialButton
                        soc="ok"
                        disabled={shared}
                        onShareWindowClose={handleShare}
                    />
                </Buttons>
            </Wrapper>
        </Container>
    );
};

export {Social};
