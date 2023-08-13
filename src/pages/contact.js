/* eslint-disable react/style-prop-object */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../components/page_title';

import { BsEnvelopeFill, BsLinkedin, BsTelephoneFill } from 'react-icons/bs';

const Contact = () => {
	const history = useHistory();
	const [user, setUser] = useState({
		name: '',
		email: '',
		message: '',
	});
	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
	};

	const PostData = async (e) => {
		e.preventDefault();
		const { name, email, message } = user;
		const res = await fetch('/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				message,
			}),
		});
		const data = await res.json();
		if (res.status === 422 || !data) {
			// console.log(data);
			toast.error('Invalid Inputs');
		} else {
			toast.info('Message Sent');
			// console.log(data);

			setUser({ name: '', email: '', message: '' });
			history.push('/contact');
		}
	};

	return (
		<div>
			<ToastContainer />
			<div id="contact">
				<PageTitle title="Contact"></PageTitle>
				<div className="content-wrap">
					<section id="quick-support">
						<h2>Quick Support</h2>
						<p style={{ marginBottom: 0 }}>
							These are the words we live by in everything we do. Every story we
							tell, every brand <br />
							we build, and every interation we create
						</p>
						<div className="myinfo">
							<h5>
								<BsTelephoneFill />
								Phone Me 24/7: <br />
								<div className="small">+918 766 813 856</div>
							</h5>
							<h5>
								<BsEnvelopeFill />
								Email Me 24/7: <br />
								<div className="small">prajwalkuchewar3@gmail.com</div>
							</h5>
							<h5>
								<BsLinkedin />
								Follow Me: <br />
								<div className="small">linkedin.com/in/prajwal018</div>
							</h5>
						</div>
					</section>
					<section id="comment">
						<h2>Get in Touch</h2>
						<form method="POST">
							<input
								type="name"
								id="name"
								name="name"
								required
								placeholder="Name"
								value={user.name}
								onChange={handleInputs}
							/>
							<br />
							<br />
							<input
								type="email"
								id="email"
								name="email"
								required
								placeholder="Email"
								value={user.email}
								onChange={handleInputs}
							/>
							<br />
							<br />
							<textarea
								id="message"
								name="message"
								required
								placeholder="Message"
								value={user.message}
								onChange={handleInputs}
							></textarea>
							<br />
							<br />
							<input type="submit" value="Leave a comment" onClick={PostData} />
						</form>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Contact;
