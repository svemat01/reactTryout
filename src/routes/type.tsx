import { FC, useState } from 'react';
import styled from 'styled-components';
import { sentence } from 'txtgen/dist/cjs/txtgen';

import { NavBar } from '../components/Navbar';

const Wrapper = styled.div`
    h1 {
        font-size: 2rem;
        max-width: 5ch;
        margin: 0;
        white-space: nowrap;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
`;

export const TypingApp: FC = () => {
    document.title = 'Typing game';

    const [text, setText] = useState(sentence());

    window.addEventListener('keydown', (event) => {
        event.preventDefault();

        console.log(event);

        if (text.startsWith(event.key)) {
            const sliced = text.slice(1);

            setText(sliced);

            if (sliced.length === 0) {
                setText(sentence());
            }
        }
    });

    return (
        <>
            <NavBar />
            <Wrapper>
                <h1>{text}</h1>

                {/* <input type="text" /> */}
            </Wrapper>
        </>
    );
};
