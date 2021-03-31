import React from 'react';
import { Button } from 'react-bootstrap';

function SaveBtn(props) {
	return (
		<Button>
			<span className="save-btn" {...props} role="button" tabIndex="0"></span>
		</Button>
	);
}

export default SaveBtn;
