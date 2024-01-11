import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { logRoles } from '@testing-library/dom';
import { kebabCaseToTitleCase } from './helpers';

test('App contains correct heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/learn React/i);
    expect(headingElement).toBeInTheDocument();
});

// test("button starts with correct label and color", () => {
test('button click flow', () => {
    // const { container } = render(<App />);
    render(<App />);
    // logRoles(container);
    // name은 버튼 텍스트
    const buttonElement = screen.getByRole('button', { name: /blue/i });
    // expect(buttonElement).toHaveClass('red');
    expect(buttonElement).toHaveClass('medium-violet-red');

    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent(/red/i);
    expect(buttonElement).toHaveClass("midnight-blue");
});

test('button starts with correct text', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('red');

    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent(/red/i);
    expect(buttonElement).toHaveClass('blue');
    // expect(buttonElement).toHaveStyle({ "background-color": "blue" });
});

// test("button has correct label and color after click", () => {
// });

test('checkbox flow', () => {
    render(<App />);

    const buttonElement = screen.getByRole('button', { name: /blue/i });
    const checkBoxElement = screen.getByRole('checkbox', {
        name: /disable button/i,
    });

    expect(buttonElement).toBeEnabled();
    expect(checkBoxElement).not.toBeChecked();

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('gray');

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeEnabled();
    // expect(buttonElement).toHaveClass("red");
    expect(buttonElement).toHaveClass('medium-violet-red');
});

test('checkbox flow after button click', () => {
    render(<App />);

    const buttonElement = screen.getByRole('button', { name: /blue/i });
    const checkBoxElement = screen.getByRole('checkbox', {
        name: /disable button/i,
    });

    fireEvent.click(buttonElement);

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('gray');

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeEnabled();
    // expect(buttonElement).toHaveClass('blue');
    expect(buttonElement).toHaveClass('midnight-blue');
});

describe('kebabCaseToTitleCase', () => {
    test('works for no hyphens', () => {
        expect(kebabCaseToTitleCase('red')).toBe('Red');
    });
    test('works for one hyphens', () => {
        expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
    });
    test('works for multiple hyphens', () => {
        expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
    });
});
