import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <nav className=" navbar  navbar-expand-lg  justify-content-between navbar-dark bg-dark" >
                <a className=" logo-style navbar text-white " href="/">
                    {/* <img src={logo} width="35" height="35" alt="logo" /> */}
                    Admin Carna
                </a>

                <ul className="navbar-nav" >
                    <li className="nav-item"><Link className="nav-link " to="/">Home</Link></li>

                </ul>

                <div className="dropdown">
                    <button className="drop-down-style btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`Welcome `}<img src={props.picture} width="40" height="40" class="rounded-circle"></img> </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#home"
                            data-toggle="modal"
                            data-target={`#id${props.id}`}
                        >Edit Perfil</a>

                        <a className="dropdown-item" href="#home"
                        // onClick={e => logout(e, props)}
                        >Sing Out</a>

                        <Link className="dropdown-item" to="/about" >About</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;