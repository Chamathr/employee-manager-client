import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBox from './Searchbox';

describe('SearchBox Component', () => {
  test('calls onSearch when search button is clicked', () => {
    const onSearchMock = jest.fn();
    const { getByRole } = render(<SearchBox value="" onChange={() => {}} onSearch={onSearchMock} />);
    const searchButton = getByRole('button');

    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });
});
