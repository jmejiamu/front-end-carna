import React from 'react';
import AddNewCourse from './englishcomponents/AddNewCourse';

const English = () => {
	return (
		<div>
			<AddNewCourse />
			<h1>Englis</h1>
			<div className="card mb-5"  >

				<div className="card-body text-left" >
					<h5 className="card-title">Title</h5>
					<p className="card-text ">Hard text</p>

					<div className=" card-link btn-group">
						{/* <EditEvent event={event} props={props} /> */}
					</div>
					<button
						type="button"
						className="card-link btn btn btn-danger"
					// onClick={() => deleteEvents(event.id)}
					>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default English;