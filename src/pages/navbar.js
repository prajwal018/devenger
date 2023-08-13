import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg bg-transparent"
				data-bs-theme="dark"
			>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarToggleExternalContent"
						aria-controls="navbarToggleExternalContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<Link className="navbar-brand" to="/">
						PRAJWAL.
					</Link>
					<div
						className="collapse navbar-collapse"
						id="navbarToggleExternalContent"
					>
						<ul className="   navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/home">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/projects">
									Projects
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default navbar;
