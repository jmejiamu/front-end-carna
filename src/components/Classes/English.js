import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NavBar from '../NavBar/NavBar';
import Pagination from '../Pagination/Pagination';
import restapi from '../url/url';
import AddNewCourse from './englishcomponents/AddNewCourse';
import EditCourse from './englishcomponents/EditCourse';

const English = (props) => {

    const [userId, setUserId] = useState("")
    const [picture, setPicture] = useState("")
    const [userName, setUserName] = useState("");

    const [contentData, setContentData] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [conPerPage] = useState(4);

    const deleteData = async (id) => {
        try {
            const deleteClass = await fetch(restapi.carna + `/delenglish/${id}`, {
                method: 'DELETE'
            })
            const dataResponse = await deleteClass.json();

            setContentData(contentData.filter(d => d.id !== id))
            toast.success(dataResponse.response)
        } catch (error) {
            console.error(error.message);
        }
    }

    const getData = async () => {
        try {
            const response = await fetch(restapi.carna + '/allenglish')

            const dataResponse = await response.json()

            setContentData(dataResponse);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getUserInfo = async () => {
        try {
            const response = await fetch(restapi.carna + '/data', {
                method: 'GET',
                headers: { token: localStorage.jwt }
            })
            const data = await response.json()
            setUserName(data.name)
            setPicture(data.picture)
            setUserId(data.id)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getData();
        getUserInfo();
    }, [])

    // PAGINATION
    // Get the current img 
    const indexOfLastCon = currentPage * conPerPage;
    const indexOfFirstCon = indexOfLastCon - conPerPage;
    const currentContent = contentData.slice(indexOfFirstCon, indexOfLastCon);

    // Change Page
    const paginate = (contentNumber) => setCurrentPage(contentNumber);
    return (
        <div className="container">
            <NavBar setAuth={props.setAuth} name={userName} id={userId} picture={picture} />
            <h1 className="margin-english">Englis Course</h1>
            <AddNewCourse />
            {contentData.length === 0 ? <h1 className="text-center mt-5 mb-5 ">There is not events yet!{'😌'}</h1> : (
                currentContent.map(data => {
                    return (
                        <div className="card mb-5" key={data.id} >

                            <div className="card-body text-left" >
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text ">{data.content}</p>

                                <div className=" card-link btn-group">
                                    <EditCourse contentToEdit={data} props={props} />
                                </div>
                                <button
                                    type="button"
                                    className="card-link btn btn btn-danger"
                                    onClick={() => deleteData(data.id)}
                                >Delete</button>
                            </div>
                        </div>
                    )
                })
            )}

            <Pagination conPerPage={conPerPage} totalCont={contentData.length} paginate={paginate} />

        </div>
    );
};

export default English;