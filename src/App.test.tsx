import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"
import { logRoles } from "@testing-library/dom";

test("App contains correct heading", () => {
    render(<App />)
    const headingElement = screen.getByText(/learn React/i);
    expect(headingElement).toBeInTheDocument()
})

// test("button starts with correct label and color", () => {
test("button click flow", () => {
    // const { container } = render(<App />);
    render(<App />);
    // logRoles(container);
    // name은 버튼 텍스트
    const buttonElement = screen.getByRole("button", { name: /blue/i });
    expect(buttonElement).toHaveClass("red");
});

test("button starts with correct text", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("red");

    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent(/red/i);
    // expect(buttonElement).toHaveClass("blue");
    // expect(buttonElement).toHaveStyle({ "background-color": "blue" });
});

// test("button has correct label and color after click", () => {

// });