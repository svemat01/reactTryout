import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '../util/colors';

const pages: {
    path: string;
    label: string;
}[] = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/type',
        label: 'Type',
    },
];

const Nav = styled.header`
    display: flex;
    padding: 0.5rem;

    background: ${COLOR.GREEN};
    color: ${COLOR.DARK};

    align-items: center;
    /* justify-content: space-around; */

    h1 {
        font-size: 3rem;
        margin-left: 1rem;
    }

    ul {
        margin-left: auto;
        margin-right: 1rem;
        list-style: none;

        display: flex;
        gap: 1rem;

        li {
            font-size: 2rem;
        }
    }
`;

export const NavBar: FC<{}> = () => {
    console.log(pages);

    return (
        <Nav>
            <h1>React Tryout</h1>

            <ul>
                {pages.map((page) => {
                    console.log({ label: page.label });

                    return (
                        <li key={page.label}>
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        borderBottom: isActive
                                            ? `.2rem solid ${COLOR.DARK}`
                                            : 'none',
                                    };
                                }}
                                to={page.path}
                            >
                                {page.label}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </Nav>
    );
};
