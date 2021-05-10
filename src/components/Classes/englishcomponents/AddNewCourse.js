import React, { useState } from 'react';
import { toast } from 'react-toastify';
import restapi from '../../url/url';

const AddNewCourse = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const submitData = async (e) => {

        try {

            const body = {
                title: title,
                content: content
            }
            const response = await fetch(restapi.carna + '/newenglish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            const dataRes = await response.json();
            toast.success(dataRes.response)
            setTitle('')
            setContent('')
        } catch (error) {
            console.error(error.message);
        }

    }

    return (
        <div>
            <button
                type="button"
                className="btn btn btn-danger mb-4  mt-5 d-flex justify-content-end"
                data-toggle="modal"
                data-target="#addModal">
                Add Course</button>

            <div className="modal" id="addModal">
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title modal-style">Add Course</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body modal-style">
                            <label></label>
                            <input
                                data-tip="Please enter the description of the event"
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}

                            />

                            <label></label>
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                required
                                value={content}
                                onChange={e => setContent(e.target.value)}
                            ></textarea>


                        </div>


                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={e => submitData(e.target.value)}
                            >ADD</button>

                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddNewCourse;