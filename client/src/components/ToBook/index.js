import React from 'react';

function ToBook(props) {
	return (
		<button
			style={{ float: 'right', marginBottom: 10 }}
			className="btn btn-success"
			onClick={() => (window.location.href = props.link)}
			formTarget="_blank"
		>
			View Book Site
		</button>
	);
}

export default ToBook;
