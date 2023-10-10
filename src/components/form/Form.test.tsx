import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({ query: {} })

const mockFormData = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    number: '123456789',
    gender: 'Male'
};

describe('Form validation', () => {
    test('displays validation message for invalid input', () => {
        const { getByLabelText, getByTestId } = render(
            <Provider store={store}>
                <Form initialData={mockFormData} />
            </Provider>
        );

        const firstNameInput = getByLabelText('First Name');
        const lastNameInput = getByLabelText('Last Name');
        const emailInput = getByLabelText('Email');
        const numberInput = getByLabelText('Phone');

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(numberInput, { target: { value: '123456789' } });

        const submitButton = getByTestId('submit');
        fireEvent.click(submitButton);
    });
});
