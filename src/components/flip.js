import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function Flip() {
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
			<div className="react-card-front">
				<div
					className="flip-switch"
					onClick={() => setFlip(!flip)}
					style={{
						borderRadius: '100px',
						backgroundColor: '#eee',
						width: '15rem',
						height: '15rem',
					}}
				></div>
			</div>
			<div className="flip-switch" onClick={() => setFlip(!flip)}>
				<div
					className="react-card-back"
					style={{
						borderRadius: '100px',
						backgroundColor: '#eee',
						width: '15rem',
						height: '15rem',
					}}
				>
					<div className="card-body">
						<h4 className="card-title">Client Testimonials</h4>
						<p className="card-text" style={{ overflow: 'hidden' }}>
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Some quick example text to build on
							the card title and make up the bulk of the caard's conte
						</p>
						<h5 className="card-subtitle mb-2 text-muted">Ronald Green</h5>
						<h6 className="card-subtitle mb-2 text-muted">UX Designer</h6>
					</div>
				</div>
			</div>
		</ReactCardFlip>
	);
}

export default Flip;
