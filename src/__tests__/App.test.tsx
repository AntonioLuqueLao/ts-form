import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
    
    test("App renders", () => {
        render(<App />);
        const title = screen.getByText(/TypeScript Form/i);
        expect(title).toBeInTheDocument();
    })

    test("User form renders", () => {
        render(<App />);
        const form= screen.getByText(/Registrar usuario/i)
        expect(form).toBeInTheDocument();
    })
    test("user listitem renders after form is submited", () => {
        render(<App />);
        const button= screen.getByText(/Registrar usuario/i)
        fireEvent.click(button);
        const list = screen.getByRole("listitem")
        expect(list).toBeInTheDocument();
    })
})