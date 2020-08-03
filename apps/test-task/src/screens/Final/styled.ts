import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    background-image: url('../../assets/icons/man.svg');
    background-repeat: no-repeat;
    background-size: 100% 97%;
    background-position: 50% 0;

    ::after {
        content: '';
        position: absolute;
        display: block;

        bottom: 0;

        width: 100%;
        height: 3%;

        background-color: #d78da4;
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
`;

export const CrossedOut = styled.span`
    position: relative;

    color: #7f4156;

    ::after {
        content: '';
        position: absolute;
        display: block;

        top: 45%;
        left: -15%;

        width: 130%;
        height: 4px;

        background-color: #7f4156;
    }
`;

export const Big = styled.span`
    font-size: 100px;
    line-height: 104px;
`;
