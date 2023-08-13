import {
	CCard,
	CCardBody,
	CCardText,
	CCardTitle,
	CCol,
	CRow,
} from '@coreui/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MapWithMarker  from '../components/MapWithMarker';
import { BsGithub, BsInstagram, BsLinkedin, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed'; 
import { toast } from 'react-toastify';
 

const Home = () => {
	const handleHi=() => {
		toast("😺 Hello Visitor");
	};

	return (
		<div id="body">
			<section id="define">
				<div>			<MapWithMarker />  </div>
				<div className="image-overlay">
					<h3 className="btn btn-light" onClick={handleHi}>Hola! 👋</h3>
					<h3>I'm Prajwal Kuchewar</h3>
					<h4>Software Engineer</h4>
					<p className='fs-6 fw-light'>
						Proactive student eager to contribute to the coding community
						through hard work and dedication to quality. Seeking to use
						exceptional communication skills as Link team member/software
						developer. Proficiency in Python, Java, Data Structures, and
						Algorithms. Passionate about web development and user experience
						design.
					</p>
					<div className='d-flex justify-content-end mt-3'>
						<button
						className="btn btn-dark"
						style={{ marginRight: '5%' }}
						onClick={() => {
							var resumeLink = document.createElement('a');
							resumeLink.href = '/Resume.pdf';
							resumeLink.download = 'Resume.pdf';
							document.body.appendChild(resumeLink);
							resumeLink.click();
							document.body.removeChild(resumeLink);
						}}
					>
						Download CV
					</button>
						<button
							className='btn btn-light'
							type="button"
							onClick={() =>
								window.open('https://www.linkedin.com/in/prajwal018')
							}
						>
							Hire Me Now
						</button></div>
					
					<h6 className='d-flex justify-content-end mt-3 pt-3'>P.S. Pick this buddy to see the world <BsFillArrowDownCircleFill style={{ color: 'green' }} className='ms-2 color-cyan fs-5' /></h6>
				</div>
			</section>

			<main className="content-wrap">
				<section id="services">
					<CRow>
						<CCol sm={3}>
							<CCard>
								<CCardBody>
									<CCardTitle>Web Development</CCardTitle>
									<CCardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CCardText>
									<button href="#">Go somewhere</button>
								</CCardBody>
							</CCard>
						</CCol>
						<CCol sm={3}>
							<CCard>
								<CCardBody>
									<CCardTitle>Software Development</CCardTitle>
									<CCardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CCardText>
									<button href="#">Go somewhere</button>
								</CCardBody>
							</CCard>
						</CCol>
						<CCol sm={3}>
							<CCard>
								<CCardBody>
									<CCardTitle>UX Design</CCardTitle>
									<CCardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CCardText>
									<button href="#">Go somewhere</button>
								</CCardBody>
							</CCard>
						</CCol>
					</CRow>
				</section>
				<section id="about">
					<div className="aboutme-text" style={{ textAlign: 'left' }}>
						<h3>Need Creative Website?</h3>
						<h3>I can Help You!</h3>
						<p>
							Proactive student eager to contribute to the coding community
							through hard work and dedication to quality. Seeking to use
							exceptional communication skills as Link team member/software
							developer. Proficiency in Python, Java, Data Structures, and
							Algorithms. Passionate about web development and user experience
							design.
						</p>
						<h6>You Can Follow Me also Here:</h6>
						<button
							onClick={() =>
								window.open('https://www.instagram.com/prxjwxl.018/')
							}
							className="btn-instagram"
							style={{
								borderRadius: '20%',
							}}
						>
							<BsInstagram />
						</button>
						<button
							onClick={() =>
								window.open('https://www.linkedin.com/in/prajwal018')
							}
							className="btn-linkedin"
							style={{
								borderRadius: '20%',
							}}
						>
							<BsLinkedin />
						</button>
						<button
							onClick={() => window.open('https://github.com/prajwal018')}
							className="btn-github"
							style={{
								borderRadius: '20%',
							}}
						>
							<BsGithub />
						</button>
					</div>
					<div className="aboutme-pic">
						<img
							alt="A beautiful sunset over the mountains"
							src={process.env.PUBLIC_URL + '/aboutme-pic.png'}
							width="320"
							height="320"
						/>
						<h2>Hi There!</h2>
						<p>Learn more about me and my background.</p>
					</div>
				</section>

				<section id="skills">
					<div className="skills-pic">
						<LiteYoutubeEmbed id="Y2jyjfcp1as"></LiteYoutubeEmbed>
						<h2>The best Tedtalk Ever!</h2>
						<p>Learn more about me and my background.</p>
					</div>
					<div className="skills-text" style={{ textAlign: 'right' }}>
						<h3>Need Creative Website?</h3>
						<h3>I can Help You!</h3>
						<p>
							Proactive student eager to contribute to the coding community
							through hard work and dedication to quality. Seeking to use
							exceptional communication skills as Link team member/software
							developer. Proficiency in Python, Java, Data Structures, and
							Algorithms. Passionate about web development and user experience
							design.
						</p>
						<h6>You Can Follow Me also Here:</h6>
						<button
							onClick={() =>
								window.open('https://www.instagram.com/prxjwxl.018/')
							}
							className="btn-instagram"
							style={{
								borderRadius: '20%',
							}}
						>
							<BsInstagram />
						</button>
						<button
							onClick={() =>
								window.open('https://www.linkedin.com/in/prajwal018')
							}
							className="btn-linkedin"
							style={{
								borderRadius: '20%',
							}}
						>
							<BsLinkedin />
						</button>
						<button
							onClick={() => window.open('https://github.com/prajwal018')}
							className="btn-github"
							style={{
								borderRadius: '20%',
							}}
						>
							<BsGithub />
						</button>
					</div>
				</section>

				<section id="projects">
					<div id="carousel" className="carousel">
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carousel"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carousel"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carousel"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
						</div>

						<div className="carousel-inner">
							<div className="carousel-item active">
								<div
									className='d-flex justify-content-center border border-3 rounded-4 p-4'
									style={{
										height:'30rem',
									}}
									
								>

										<iframe
										style={{ opacity: 0.7 }} 
										className='col-10 opacity-dark'
										title='task_app'
										src={`https://taskkman-dae11632e929.herokuapp.com/`}
										
									>

										</iframe>
								</div>
								<button className="carousel-caption cursor-pointer border-0 bg-transparent"  onClick={() =>
									window.open('https://taskkman-dae11632e929.herokuapp.com/')}>
									<h5>TaskK Man</h5>
									<p>
										React App which implements complex functionalities like React-Redux, React-Router and many more...
									</p>
								</button>
							</div>
							<div className="carousel-item">
								<div
									style={{
										backgroundColor: '#eee',
										color: '#000',
										width: '150rem',
										height: '30rem',
									}}
								></div>
								<div className="carousel-caption">
									<h5>Project 2</h5>
									<p>
										Some representative placeholder content for the second
										slide.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<div
									style={{
										backgroundColor: '#eee',
										color: '#000',
										width: '150rem',
										height: '30rem',
									}}
								></div>
								<div className="carousel-caption">
									<h5>Project 3</h5>
									<p>
										Some representative placeholder content for the third slide.
									</p>
								</div>
							</div>
						</div>

						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carousel"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carousel"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
