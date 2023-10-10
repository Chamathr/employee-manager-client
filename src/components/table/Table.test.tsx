import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Table from './Table';
import { store } from '../../redux/store'
import { Provider, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}));

const tableData = [{
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    number: '123456789',
    gender: 'Male'
}];

(useRouter as jest.Mock).mockReturnValue({ query: {} })

describe('DataCard Component', () => {

    beforeEach(() => {
        (useSelector as jest.Mock).mockReturnValue(tableData);
    });

    test('renders the Table component', async () => {
        const { container } = render(
            <Provider store={store}>
                <Table />
            </Provider>
        );

        expect(container).toBeDefined();
    });
})