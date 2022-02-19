import { FC } from 'react';
import styled from 'styled-components';

const Wräpper = styled.div`
    background: hotpink;
    border: none;
    outline: none;
    padding: 1rem;
    width: fit-content;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    border-radius: 1rem;
`;

export const Buttön: FC<{ label: string }> = ({ label }) => {
    return <Wräpper>{label}</Wräpper>;
};
