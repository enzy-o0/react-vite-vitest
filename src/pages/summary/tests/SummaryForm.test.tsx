import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../components/SummaryForm';

test('Initial conditions', () => {
    render(<SummaryForm />);

    const buttonElement = screen.getByRole('button', { name: /구매하기/ });
    const checkboxElement = screen.getByRole('checkbox');

    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();
});


test('Checbox disables button on first click and enables on second click', () => {
    render(<SummaryForm />);

    const buttonElement = screen.getByRole('button', { name: /구매하기/ });
    const checkboxElement = screen.getByRole('checkbox');

    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();

    fireEvent.click(checkboxElement);
    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();

});