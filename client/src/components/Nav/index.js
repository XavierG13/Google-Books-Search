import React from 'react';
import { Navbar } from 'react-bootstrap';

function Nav() {
	return (
		<div>
			<Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand" href="/">
					Google Books Search
				</a>

				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="Saved">
								Saved
							</a>
						</li>
					</ul>
				</div>
			</Navbar>
		</div>
	);
}

export default Nav;
