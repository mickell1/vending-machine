import React from 'react';
import { render } from '@testing-library/react';
import VendingMachine from './VendingMachine';

test('renders learn react link', () => {
  const { getByText } = render(<VendingMachine />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
