import { FC } from 'react';
import styled from 'styled-components';

import { COLOR } from '../../util/colors';

const Wrapper = styled.div<{ width?: string }>`
    background: ${COLOR.GREEN};
    color: ${COLOR.DARK};
    border: none;
    outline: none;

    border-radius: 0.5rem;

    padding: 1rem;
    width: ${({ width }) => width ?? 'fit-content'};

    font-size: 1.5rem;
`;

export const Button: FC<{ label: string; width?: string }> = ({
    label,
    width,
}) => {
    return <Wrapper width={width}>{label}</Wrapper>;
};
