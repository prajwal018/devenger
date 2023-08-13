import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import React from 'react';
import About from './about';

describe('About', () => {
	test('renders page title', () => {
		render(<About />);
		const heading = screen.getByRole('heading', { name: 'About' });
		expect(heading).toBeInTheDocument();
	});

	test('renders process cards', () => {
		render(<About />);
		const processCards = screen.getAllByRole('process-card');
		expect(processCards.length).toBe(4);
	});

	test('renders brief section', () => {
		render(<About />);
		expect(screen.getByText(/Digital Web Products/i)).toBeInTheDocument();
	});

	test('renders feedback section', () => {
		render(<About />);
		expect(screen.getByText(/visionary and a reliable/i)).toBeInTheDocument();
	});
});
