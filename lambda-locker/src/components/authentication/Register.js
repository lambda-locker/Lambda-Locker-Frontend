import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../css/form.css'
import '../../css/text.css'

const Register = () => {


    return (
        <>
            <h2>Register to Create <br />Your <span className="lambdaText">Lambda Locker</span></h2>
            <form>
                <div>
                    <input type="text" name="student_name" required placeholder="name" />
                </div>
                <div>
                    <input type="text" name="username" required placeholder="username" />
                </div>
                <div className="selectMenu">
                    <select>
                        <option disabled selected>select track</option>
                        <option value="web">Web</option>
                        <option value="iOS">iOS</option>
                        <option value="android">Android</option>
                        <option value="data_science">Data Science</option>
                        <option value="uxui">UX/UI</option>
                    </select>
                </div>
                <div>
                    <input type="text" className="cohort" name="cohort" required placeholder="cohort" />
                </div>
                <div>
                    <input type="text" name="email" required placeholder="email" />
                </div>
                <div>
                    <input type="password" name="password" required placeholder="password" />
                </div>
                <button className="formButton" type="submit">Login</button>
            </form>
            <div><p>Already Registered?  <NavLink to='/login'>Login</NavLink></p></div>
        </>
    )

}

export default Register