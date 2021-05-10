import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import restapi from '../url/url';
import AddNewCourse from './englishcomponents/AddNewCourse';

const English = () => {

    const [contentData, setContentData] = useState([]);

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

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <AddNewCourse />
            <h1>Englis</h1>
            {contentData.length === 0 ? <h1 className="text-center mt-5 mb-5 ">There is not events yet!{'😌'}</h1> : (
                contentData.map(data => {
                    return (
                        <div className="card mb-5" key={data.id} >

                            <div className="card-body text-left" >
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text ">{data.content}</p>

                                <div className=" card-link btn-group">
                                    {/* <EditEvent event={event} props={props} /> */}
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

        </div>
    );
};

export default English;