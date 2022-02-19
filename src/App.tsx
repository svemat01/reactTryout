import styled, { createGlobalStyle } from 'styled-components';

import { Buttön } from './components/Button';
import { Löc } from './components/Luc';
import { Töggle } from './components/Toggle';

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: monospace, sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
`;

const Wrapper = styled.div`
    background: #2d2e2f;
    color: white;
    height: 100vh;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Äpp = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            Hello World
            <Buttön label="Click me" />
            <Töggle />
            <Löc />
        </Wrapper>
    );
};
