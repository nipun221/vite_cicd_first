import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders Vite + React text", () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
});

test('Increment button works', () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", { name: /count is/i });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/count is\s*1/i);
});
