import React, { useState } from 'react';

const AddNewCourse = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

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

                            />

                            <label></label>
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                            // value={notesData}
                            // onChange={e => setNotesData(e.target.value)}
                            ></textarea>

                            {/* {noteError.length > 0 &&
                                <span className='error' style={{ color: 'red' }}>{noteError} </span>} */}

                            <label></label>
                            <textarea
                                type="text"
                                placeholder="Location"
                                className="form-control"
                            // value={locationData}
                            // onChange={e => setLocationData(e.target.value)}

                            ></textarea>
                            {/* {locationError.length > 0 &&
                                <div className='error' style={{ color: 'red' }}>{locationError}</div>} */}

                            <div>Pick the start and end Date here</div>
                            {/* <DatePicker
                                placeholder="yyyy-mm-dd"
                                className="form-control"
                                minDate={new Date()}
                                showTimeSelect
                                dateFormat={"yyyy-MM-dd hh:mm "}
                                selected={startDate}
                                onChange={e => startDateHanlder(e)} /> */}
                            <div>to </div>
                            {/* <DatePicker
                                placeholder="yyyy-MM-dd"
                                className="form-control"
                                minDate={new Date()}
                                showTimeSelect
                                dateFormat={"yyyy-MM-dd hh:mm "}
                                selected={endDate}
                                onChange={e => endDateHanlder(e)} /> */}
                            <div> --- </div>
                            <label>From</label>
                            <input
                                type="text"
                                placeholder="hh:mm - hh:mm"
                                className="form-control"
                            // value={durationData}
                            // onChange={e => setDurationData(e.target.value)}
                            />
                            {/* {durationDateError.length > 0 &&
                                <div className='error' style={{ color: 'red' }}>{durationDateError}</div>} */}


                            <label>Start Date</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="yyyy-mm-dd"
                            // value={startData}
                            // onChange={e => setStartData(e.target.value)}

                            />
                            {/* 
                            {startDateError.length > 0 &&
                                <div className='error' style={{ color: 'red' }}>{startDateError}</div>} */}

                            <label>End Date </label>
                            <input
                                type="text"
                                placeholder="yyyy-mm-dd"
                                className="form-control"
                            // value={endData}
                            // onChange={e => setEndData(e.target.value)} 
                            />
                            {/* 
                            {endDateError.length > 0 &&
                                <span className='error' style={{ color: 'red' }}>{endDateError}</span>} */}

                        </div>


                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-danger"
                            //data-dismiss="modal"
                            // onClick={e => updateDataEvent(e.target.value)}
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