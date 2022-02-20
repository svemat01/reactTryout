import { FC } from 'react';
import styled from 'styled-components';

import { NavBar } from '../components/Navbar';
import { Button } from '../components/simple/Button';
import { COLOR } from '../util/colors';

const Wrapper = styled.div`
    h1 {
        font-size: 3rem;
        max-width: 5ch;
        margin: 0;
        white-space: nowrap;
    }

    display: flex;
    flex-direction: column;

    margin: 1rem;
    overflow-x: hidden;

    color: ${COLOR.LIGHT};
`;

export const Home: FC = () => {
    document.title = 'Home';

    return (
        <>
            <NavBar />
            <Wrapper>
                <h1>Welcome!</h1>

                <Button label="Go to Type" />
            </Wrapper>
        </>
    );
};
