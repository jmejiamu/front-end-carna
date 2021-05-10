
import './App.css';

import '../src/components/styles/styles.scss';
import Login from './components/loginlogout/Login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Register from './components/loginlogout/Register';
import Dashboard from './components/Dashboard/Dashboard';
import restapi from './components/url/url';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import English from './components/Classes/English';
import Spanish from './components/Classes/Spanish';

toast.configure();

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const setAuth = (boolean) => {
        setAuthenticated(boolean);
    }

    const isAuth = async () => {
        try {
            const response = await fetch(restapi.carna + '/isverify', {
                method: 'GET',
                headers: { token: localStorage.jwt }
            })
            const data = await response.json()
            data === true ? setAuthenticated(true) : setAuthenticated(false)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        isAuth();
    }, [])
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact={true} path='/' render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard" />} />
                    <Route exact path='/register' render={props => <Register {...props} />} />
                    <Route exact path='/dashboard' render={props => <Dashboard {...props} />} />
                    <Route exact path='/english' render={props => <English {...props} />} />
                    <Route exact path='/spanish' render={props => <Spanish {...props} />} />

                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;


