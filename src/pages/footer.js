import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsEnvelopeFill, BsLink, BsTelephoneFill } from 'react-icons/bs';

import React from 'react';
import { Link } from 'react-router-dom';
const footer = () => {
	return (
		<footer>
			<section id="footer">
				<h2>Let's Talk!</h2>
				<div className="myinfo">
					<h5>
						<BsTelephoneFill />
						<br />
						Phone Me: <br />
						<div className="small">prajwalkuchewar3@gmail.com</div>
					</h5>
					<h5>
						<BsEnvelopeFill />
						<br />
						Email Me: <br />
						<div className="small">prajwalkuchewar3@gmail.com</div>
					</h5>
					<h5>
						<BsLink />
						<br />
						Follow Me: <br />
						<div className="small">linkedin.com/in/prajwal018</div>
					</h5>
				</div>
				<br />
				<Link to="/contact">
					<button to="/contact" className="button">
						Hire Me
					</button>
				</Link>
			</section>
			<div className="copyright">
				<p>&copy; 2023 Prajwal Inc.</p>
			</div>
		</footer>
	);
};

export default footer;
