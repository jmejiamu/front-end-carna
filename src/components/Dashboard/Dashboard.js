import React, { useEffect, useState } from 'react';
import Data from '../Chart/Data';
import NavBar from '../NavBar/NavBar';
import restapi from '../url/url';


const Dashboard = () => {

    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPicture, setUserPiture] = useState("")


    const getUserData = async () => {
        try {
            const response = await fetch(restapi.carna + '/data', {
                method: 'GET',
                headers: { token: localStorage.jwt }
            })
            const data = await response.json();
            // pass the id
            // console.log(data);
            setUserName(data.name)
            setUserId(data.id)
            setUserPiture(data.picture)
            setUserEmail(data.email)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getUserData();
    }, [])
    return (

        <>
            <NavBar />
            <div class="sidebar-container">
                <div class="sidebar-logo">
                    Carna
                </div>
                <ul class="sidebar-navigation">
                    <li class="header">User name </li>
                    <li>
                        <a href="#home">
                            <i class="fa fa-home" aria-hidden="true"></i> Home
                        </a>
                    </li>
                    <li>
                        <a href="#part">
                            <i class="fa fa-handshake-o" aria-hidden="true"></i> Partnerships
                        </a>
                    </li>
                    <li class="header">Options</li>
                    <li>
                        <a href="#users">
                            <i class="fa fa-users" aria-hidden="true"></i> Users
                        </a>
                    </li>
                    <li>
                        <a href="#settings">
                            <i class="fa fa-cog" aria-hidden="true"></i> Setting
                        </a>
                    </li>
                    <li>
                        <a href="#help">
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