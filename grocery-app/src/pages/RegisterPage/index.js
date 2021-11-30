import React, { useState } from 'react';
import './index.css'

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState({
        userNameError: '',
        emailError: ''
    })

    const countries = ['USA', 'UK', 'China']

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

    function onCheckboxChange(event) {
        var array = []
        var checkboxes = document.querySelectorAll('input[name="' + event.target.name + '"]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        setUser({
            ...user,
            [event.target.name]: array,
        })
        console.log(array);
    }

    function validate() {
        if (user.username.length <= 0) {
            setErrorMessage({
                ...errorMessage,
                userNameError: 'Name is required'
            })
            return false
        } else {
            setErrorMessage({
                ...errorMessage,
                userNameError: 'Email is '
            })
            return true;
        }
        // return true
    }

    return (
        <div className>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper">
                        <h1>Register</h1>
                        <form onSubmit={onSubmitHandler} >
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" className="form-control" value={user.username} name="username" onChange={onChangeHandler} />
                                <small className="text-danger">{errorMessage.userNameError}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-control" value={user.email} name="email" onChange={onChangeHandler} />
                                <small className="text-danger">{errorMessage.emailError}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control" value={user.password} name="password" onChange={onChangeHandler} />
                            </div>

                            <div>
                                <input type="submit" value="Register" className="btn btn-primary btn-block" />
                            </div>
                        </form>
                    </div>
                    <h1>{user.username}, {user.email}, {user.password}</h1>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}
export default Register;