import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Home } from './routes/home';
import { TypingApp } from './routes/type';

// https://reactrouter.com/docs/en/v6/getting-started/tutorial

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        font-size: 62.5%;
    }

    html, body {
        /* width: 100vw;
        height: 100vh; */

        padding: 0;
        margin: 0;

        font-family: 'Roboto', monospace, sans-serif;

        height: 100vh;

        background: #2A2D34
    }

    #root {
        height: 100%;
    }
    

    a {
        text-decoration: none;
    }
`;

// export const Äpp = () => {
//     return (
//         <Wrapper>
//             <GlobalStyle />
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<></>} />
//                     <Route path="type" element={<TypingApp />} />
//                 </Routes>
//             </BrowserRouter>
//             {/* <Buttön label="Click me" />
//             <Töggle />
//             <Löc /> */}
//         </Wrapper>
//     );
// };

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="type" element={<TypingApp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
