import React from 'react'

import { NavLink } from 'react-router-dom'

import Logo from '../assets/lambda-locker-logo-transparent-white.png'

import '../css/button.css'
import styled from 'styled-components'

const NavBar = styled.div`
    min-width: 100%;
    background-color: #bb1333;
    display: flex;
    justify-content: center;

    .linkContainer {
        width: 80%;
        padding: 20px 0;
        display: flex;
        justify-content: flex-end;
        max-height: 60px;        
    }

    .brandContainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
            max-width: 120px;
        }
    }


`

const Nav = () => {

    return (
        <NavBar>
            <div className="brandContainer">
                <NavLink to='/'><img src={Logo} /></NavLink>
            </div>
            <div className="linkContainer">
                <NavLink to='/register'><button>Register</button></NavLink>
                <NavLink to='/login'><button>Login</button></NavLink>
            </div>
        </NavBar >
    )
}

export default Nav