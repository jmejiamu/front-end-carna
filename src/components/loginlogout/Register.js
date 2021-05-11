import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import restapi from '../url/url';

const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitUserData = async (e) => {

        e.preventDefault();

        try {
            // Object to be sent to the back end
            let defaultPicture = 'https://irokonews.com/wp-content/uploads/2020/06/Capture-3-400x289.png';
            const body = {
                name: name,
                email: email,
                password: password,
                picture: defaultPicture
            }

            const response = await fetch(restapi.carna + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })

            // Getting the response  recieved from the server
            const data = await response.json();

            console.log(data, '>>>>>>>');

            // if the token exist save it the local storage
            if (data.token) {
                localStorage.setItem('jwt', data.token)

                props.setAuth(true)
                toast.success("Registered")
            } else {
                props.setAuth(false)
                toast.error(data.response);

            }
        } catch (error) {
            console.error(error.message);
        }

    }
    return (
        <div className="container bck">
            <div class="row">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8 login-box">
                    <div class="col-lg-12 login-key">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div class="col-lg-12 login-title">
                        ADMIN
                </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input
                                        type="text"
                                        className="form-control in"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">EMAIL</label>
                                    <input
                                        type="text"
                                        className="form-control in"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input
                                        type="password"
                                        className="form-control in" i
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">

                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="submit" onClick={submitUserData} className="btn btn-outline-primary">REGISTER</button>
                                        <Link to="/">
                                            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
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

export default Register;