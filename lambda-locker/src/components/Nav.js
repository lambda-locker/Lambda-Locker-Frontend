import React from 'react'

import { NavLink } from 'react-router-dom'

import button from '../css/button.css'
import styled from 'styled-components'

const NavBar = styled.div`
    min-width: 100%;
    background-color: #bb1333;
    display: flex;
    justify-content: center;

    .navContainer {
        width: 80%;
        padding: 20px 0;
        display: flex;
        justify-content: flex-end;
        max-height: 60px;        
    }
`

const Nav = () => {

    return (
        <NavBar>
            <div className="navContainer">
                <NavLink to='/register'><button>Register</button></NavLink>
                <NavLink to='/login'><button>Login</button></NavLink>
            </div>
        </NavBar >
    )
}

export default Nav