import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Home from './pages/home';
import Navbar from './pages/navbar';
import Projects from './pages/projects';

export default function App() {
	return (
		<Router>
			<Navbar />
			<div>
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}
