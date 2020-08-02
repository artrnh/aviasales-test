import React from 'react';

import {SocialButton} from 'test-task/components';

import {Container, Wrapper, Label, Buttons, Check} from './styled';

const Social: React.FC = (props) => {
    const shared = false;

    return (
        <Container>
            {shared && <Check />}

            <Wrapper shared={shared}>
                <Label shared={shared}>Поделись с друзьями:</Label>

                <Buttons>
                    <SocialButton soc="vk" disabled={shared} />
                    <SocialButton soc="facebook" disabled={shared} />
                    <SocialButton soc="twitter" disabled={shared} />
                    <SocialButton soc="ok" disabled={shared} />
                </Buttons>
            </Wrapper>
        </Container>
    );
};

export {Social};
