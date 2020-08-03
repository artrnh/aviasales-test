import styled from 'styled-components';

import {device} from 'test-task/theme';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    background-image: url('../../assets/images/man.svg');
    background-repeat: no-repeat;
    background-size: 100% 97%;
    background-position: 50% 0;

    ::after {
        content: '';
        position: absolute;
        display: block;

        z-index: -1;

        bottom: 0;

        width: 100%;
        height: 15%;

        background-color: #d78da4;
    }

    @media ${device.mobileL} {
        height: 340px;

        background-size: 100% auto;
        background-position: 50% 0;
    }
`;

export const Title = styled.h1`
    margin: 0;

    font-family: 'Shnobel';
    font-style: normal;
    font-weight: normal;
    text-align: center;

    font-size: 50px;
    line-height: 52px;

    @media ${device.mobileL} {
        font-size: 30px;
        line-height: 31px;
    }
`;

export const CrossedOut = styled.span`
    position: relative;

    color: ${(props) => props.theme.colors.darkPink};

    ::after {
        content: '';
        position: absolute;
        display: block;

        top: 45%;
        left: -15%;

        width: 130%;
        height: 4px;

        background-color: ${(props) => props.theme.colors.darkPink};
    }
`;

export const Big = styled.span`
    font-size: 100px;
    line-height: 104px;

    @media ${device.mobileL} {
        font-size: 50px;
        line-height: 52px;
    }
`;
