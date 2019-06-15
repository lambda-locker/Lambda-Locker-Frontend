import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../css/form.css'
import '../../css/text.css'

const Login = () => {

    return (
        <>
            <form >
                <div>
                    <input type="text" name="email" required placeholder="email" />
                </div>
                <div>
                    <input type="password" name="password" required placeholder="password" />
                </div>
                <button className="formButton" type="submit">Login</button>
            </form>
            <div><p>New User?  Register <NavLink to='/register'>Here</NavLink></p></div>
        </>
    )

}

export default Login