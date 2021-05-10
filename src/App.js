
import './App.css';

import '../src/components/styles/styles.scss';
import Login from './components/loginlogout/Login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Register from './components/loginlogout/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Chart from './components/Chart/Chart';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Login exact path='/' render={props => <Register {...props} />} />
                    <Route exact path='/register' render={props => <Register {...props} />} />
                    <Route exact path='/dashboard' render={props => <Dashboard {...props} />} />

                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;


