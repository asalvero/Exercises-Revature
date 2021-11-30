import React, { useState } from 'react';
import './index.css'

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState({
        userNameError: '',
        passwordError: ''
    })

    function onChangeHandler(event) {
        // console.log(event.target.name)
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        if (validate()) {
            console.log(user)
        } else {
            console.log('error')
        }
    }

    function validate() {
        if (user.username === "admin" && user.password === "123") {
            setErrorMessage({
                ...errorMessage,
                userNameError: 'Login is succesful'
            })
            return true;
        } else {
            setErrorMessage({
                ...errorMessage,
                userNameError: 'Login is incorrect'
            })
            return false
        }
        // return true
    }

    return (
        <div className>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper">
                        <h1>Login</h1>
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" className="form-control" value={user.username} name="username" onChange={onChangeHandler} />
                                <small className="text-danger">{errorMessage.userNameError}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control" value={user.password} name="password" onChange={onChangeHandler} />
                            </div>

                            <div>
                                <input type="submit" value="Login" className="btn btn-primary btn-block" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}
export default Login;