import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import DataCard from './DataCard';
import { store } from '../../redux/store'
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

const mockEmployeeData = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    number: '123456789',
    gender: 'Male'
};

describe('DataCard Component', () => {
    test('renders the DataCard component', async () => {
        (useRouter as jest.Mock).mockReturnValue({ query: {} })
        const { getByText } = render(
            <Provider store={store}>
                <DataCard employeeData={mockEmployeeData} />
            </Provider>
        );

        expect(getByText(`${mockEmployeeData.first_name} ${mockEmployeeData.last_name}`)).toBeInTheDocument();
        expect(getByText(mockEmployeeData.email)).toBeInTheDocument();
        expect(getByText(mockEmployeeData.number)).toBeInTheDocument();
        expect(getByText(mockEmployeeData.gender)).toBeInTheDocument();
    });
})