import React from 'react';
import { Link } from 'react-router-dom';
import logout from '../loginlogout/logout';

const NavBar = (props) => {
    return (
        <>
            <nav className=" navbar fixed-top   navbar-expand-lg  justify-content-between navbar-dark bg-dark" >
                <a className=" logo-style navbar text-white " href="/">

                    Admin Carna
                </a>

                <ul className="navbar-nav" >
                    <li className="nav-item"><Link className="nav-link " to="/">Home</Link></li>

                </ul>

                <div className="dropdown">
                    <button className="drop-down-style btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`${props.name}`}<img src={props.picture} width="40" height="40" className="rounded-circle ml-3"></img> </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#home"
                            data-toggle="modal"
                            data-target={`#modal`}
                        >Edit Perfil</a>

                        <a className="dropdown-item" href="#home"
                            onClick={e => logout(e, props)}
                        >Sing Out</a>

                        <Link className="dropdown-item" to="#" >About</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;