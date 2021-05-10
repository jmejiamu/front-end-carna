import React from 'react';
import Data from '../Chart/Data';


const Dashboard = () => {
    return (

        <>

            <div class="sidebar-container">
                <div class="sidebar-logo">
                    Carna
                </div>
                <ul class="sidebar-navigation">
                    <li class="header">User name </li>
                    <li>
                        <a href="#t-shirt">
                            <i class="fa fa-home" aria-hidden="true"></i> Home
                        </a>
                    </li>
                    <li>
                        <a href="#jackets">
                            <i class="fa fa-handshake-o" aria-hidden="true"></i> Partnerships
                        </a>
                    </li>
                    <li class="header">Options</li>
                    <li>
                        <a href="#wallets">
                            <i class="fa fa-users" aria-hidden="true"></i> Users
                        </a>
                    </li>
                    <li>
                        <a href="#hats">
                            <i class="fa fa-cog" aria-hidden="true"></i> Setting
                        </a>
                    </li>
                    <li>
                        <a href="#watch">
                            <i class="fa fa-info-circle" aria-hidden="true"></i> Helps
                        </a>
                    </li>
                </ul>
            </div>

            <div class="content-container">


                <div class="container-fluid" id="jackets">


                    <div class="jumbotron">
                        <div className="grid-container" >
                            <Data />

                            <div className='card card-style mt-5 grid-item mb-5'>
                                {/* <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" /> */}
                                {/* <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div> */}
                            </div>
                            {/* <div className='card card-style mt-5 grid-item mb-5'>
                                <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" />
                                <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div>
                            </div>
                            <div className='card card-style mt-5 grid-item mb-5'>
                                <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" />
                                <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div>
                            </div>
                            <div className='card card-style mt-5 grid-item mb-5'>
                                <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" />
                                <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>




            </div>
        </>
    );
};

export default Dashboard;