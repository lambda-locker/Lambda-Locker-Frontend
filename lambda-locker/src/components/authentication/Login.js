import React from 'react'

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
        </>
    )

}

export default Login