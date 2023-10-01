import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from './Navbar';

test('renders the Navbar component', () => {
  const { getByText } = render(<Navbar />);
  const titleElement = getByText(/Employee Manager/i);
  expect(titleElement).toBeInTheDocument();
});
