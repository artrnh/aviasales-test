import React, {useState} from 'react';

import url from 'url';

import {FacebookIcon, TwitterIcon, VkIcon, OkIcon, HeartIcon} from 'test-task/assets/icons';

import {FacebookButton, OkButton, TwitterButton, VkButton} from './styled';

const buttonsBySoc = {
    facebook: FacebookButton,
    ok: OkButton,
    twitter: TwitterButton,
    vk: VkButton,
};

const iconsBySoc = {
    facebook: FacebookIcon,
    ok: OkIcon,
    twitter: TwitterIcon,
    vk: VkIcon,
};

export type Soc = 'facebook' | 'twitter' | 'vk' | 'ok';

interface Props {
    soc: Soc;
    disabled?: boolean;
}

const SocialButton: React.FC<Props> = (props) => {
    const {soc, disabled} = props;

    const [hovered, setHovered] = useState(false);

    const ButtonComponent: React.ElementType = buttonsBySoc[soc];
    const IconComponent = hovered && !disabled ? HeartIcon : iconsBySoc[soc];

    const shareUrl = url.format({
        protocol: 'https',
        hostname: 'kandidat.aviasales.ru',
    });

    return (
        <ButtonComponent
            url={shareUrl}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
        >
            <IconComponent />
        </ButtonComponent>
    );
};

SocialButton.defaultProps = {
    disabled: false,
};

export {SocialButton};
