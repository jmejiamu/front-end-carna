import React from 'react';

const EditCourse = (props) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger "
        data-toggle="modal"
        data-target={`#id${props.event.id}`}>
        Edit</button>

      <div className="modal" id={`id${props.event.id}`}>
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
              // value={descriptionData}
              // onChange={e => setDescriptionData(e.target.value)}
              />
              <label>Description</label>
              <textarea
                type="text"
                className="form-control"
              // value={notesData}
              // onChange={e => setNotesData(e.target.value)}
              ></textarea>
              <label>Location</label>
              <textarea
                type="text"
                className="form-control"
              // value={locationData}
              // onChange={e => setLocationData(e.target.value)}
              ></textarea>

              <label>From</label>
              <input
                type="text"
                className="form-control"
              // value={durationData}
              // onChange={e => setDurationData(e.target.value)} 
              />
              <label>Start</label>
              <input
                type="text"
                className="form-control"
              // value={startData}
              // onChange={e => setStartData(e.target.value)} 
              />
              <label>End</label>
              <input
                type="text"
                className="form-control"
              // value={endData}
              // onChange={e => setEndData(e.target.value)} 
              />
            </div>


            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              // onClick={e => updateDataEvent(e.target.value)}
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