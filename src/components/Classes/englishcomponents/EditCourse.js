import React, { useState } from 'react';
import restapi from '../../url/url';

const EditCourse = (props) => {
    const [title, setTitle] = useState(props.contentToEdit.title)
    const [content, setContent] = useState(props.contentToEdit.content)

    const updateData = async () => {
        try {
            const body = {
                title: title,
                content: content,

            }
            const response = await fetch(restapi.carna + `/updateenglish/${props.contentToEdit.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error);
        }
        window.location = '/english'
    }
    return (
        <div>
            <button
                type="button"
                className="btn btn-danger "
                data-toggle="modal"
                data-target={`#id${props.contentToEdit.id}`}>
                Edit</button>

            <div className="modal" id={`id${props.contentToEdit.id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title modal-style">Edit Event</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body modal-style">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <label>Description</label>
                            <textarea
                                type="text"
                                className="form-control"
                                value={content}
                                onChange={e => setContent(e.target.value)}
                            ></textarea>


                        </div>


                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={e => updateData(e.target.value)}
                            >Edit</button>

                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default EditCourse;