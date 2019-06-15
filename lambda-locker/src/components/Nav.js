import React from 'react'

import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const NavBar = styled.div`
    min-width: 100%;
    background-color: #bb1333;
    display: flex;
    justify-content: center;

    .navContainer {
        width: 80%;
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;

        a {
            color: #fff;
            text-decoration: none;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 10px 20px;
        }

        a:first-child {
            margin-right: 20px;
        }
        
    }
`

const Nav = () => {

    return (
        <NavBar>
            <div className="navContainer">
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Login</NavLink>

            </div>
        </NavBar>
    )
}

export default Nav