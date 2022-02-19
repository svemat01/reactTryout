import { useState } from 'react';
import styled from 'styled-components';

const Ball = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: aqua;
`;

const Bötton = styled.button<{ isEnabled: boolean }>`
    background: hotpink;
    border: none;
    outline: none;
    width: fit-content;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    border-radius: 0.5rem;
    padding-left: ${({ isEnabled }) => (isEnabled ? '2rem' : '0')};
    margin-left: ${({ isEnabled }) => (isEnabled ? '2rem' : '0')};
    padding-right: ${({ isEnabled }) => (isEnabled ? '0' : '2rem')};
    margin-right: ${({ isEnabled }) => (isEnabled ? '0' : '2rem')};
    transition: 250ms padding-left, 600ms padding-right, 400ms margin-left;
    transform: scale(2);
    cursor: pointer;
    /* transform: ${({ isEnabled }) =>
        isEnabled ? 'translateX(20rem) translateY(20rem)' : ''}; */
`;

export const Töggle = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <Bötton isEnabled={isOn} onClick={() => setIsOn(!isOn)}>
            <Ball />
        </Bötton>
    );
};
