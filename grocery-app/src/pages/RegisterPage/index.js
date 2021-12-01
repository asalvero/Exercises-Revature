import axios from 'axios';
import React, { useState } from 'react';
import './index.css'

const RegisterPage = () => {

    const [user, setUser] = useState({
        firstName: '',
        email: '',
        password: '',
        mobile: ''
    })

    const [errorMessage, setErrorMessage] = useState({
        firstNameError: '',
        passwordError: '',
        error: ''
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
        // if (validate()) {
        //     console.log(user)
        // } else {
        //     console.log('error')
        // }
        axios.post('https://apolis-grocery.herokuapp.com/api/auth/register', user)
        .then(response => {
            console.log(response.data)
        })
        .catch(
            error => console.error(error)
        )
    }

    function validate() {
        if (user.username.length <= 0) {
            setErrorMessage({
                ...errorMessage,
                userNameError: 'Name is required'
            })
            return false
        }else if(user.password.length <= 6 ){
            setErrorMessage({
                ...errorMessage,
                passwordError: 'Password must be at least 6 characters'
            })
        } else {
            setErrorMessage({
                ...errorMessage,
                error: 'Please try again later'
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
                        <form method="post" onSubmit={onSubmitHandler} >
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <input type="text" className="form-control" value={user.firstName} name="firstName" onChange={onChangeHandler} />
                                <small className="text-danger">{errorMessage.userNameError}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control" value={user.email} name="email" value={user.email} onChange={onChangeHandler} />
                                <small className="text-danger">{errorMessage.emailError}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Mobile</label>
                                <input type="text" className="form-control" value={user.mobile} name="mobile" value={user.mobile} onChange={onChangeHandler} />
                                
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control" value={user.password} name="password" value={user.password} onChange={onChangeHandler} />
                                <small className="text-danger">{errorMessage.passwordError}</small>
                            </div>

                            <div>
                                <input type="submit" value="Register" className="btn btn-primary btn-block" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}
export default RegisterPage;
