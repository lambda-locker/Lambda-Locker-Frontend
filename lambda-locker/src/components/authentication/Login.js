import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../css/form.css'
import '../../css/text.css'

const Login = () => {

    return (
        <>
            <h2>Login to Open <br />Your <span className="lambdaText">Lambda Locker</span></h2>
            <form >
                <div>
                    <input type="text" name="email" required placeholder="email" />
                </div>
                <div>
                    <input type="password" name="password" required placeholder="password" />
                </div>
                <button className="formButton" type="submit">Login</button>
            </form>
            <div><p>New User?  <NavLink to='/register'>Register</NavLink></p></div>
        </>
    )

}

export default Login