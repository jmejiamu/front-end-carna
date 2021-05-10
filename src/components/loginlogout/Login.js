import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import restapi from '../url/url';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitUserData = async (e) => {
        e.preventDefault();

        try {
            const body = {
                email: email,
                password: password
            }

            const response = await fetch(restapi.carna + '/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            const data = await response.json()

            if (data.token) {
                localStorage.setItem('jwt', data.token)

                props.setAuth(true)
                toast.success(" ✔️  Logged in")
            } else {
                props.setAuth(false);
                toast.error(` ❌ ${data.response}`)

            }

        } catch (error) {

        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key">
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div class="col-lg-12 login-title">
                        ADMIN
                </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label class="form-control-label">EMAIL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="form-control-label">PASSWORD</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <div class="col-lg-12 loginbttm">
                                    <div class="col-lg-6 login-btm login-text">

                                    </div>
                                    <div class="col-lg-6 login-btm login-button">

                                        <button type="submit" onClick={submitUserData} className="btn btn-outline-primary">LOGIN</button>

                                        <Link to="/register">
                                            <button type="submit" class="btn btn-outline-primary">Register</button>
                                        </Link>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-2"></div>
                </div>
            </div>

        </div>
    );
};

export default Login;