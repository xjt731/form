import { render, screen, fireEvent } from "@testing-library/react";
import AutoCompleteComponent from "../components/AutoCompleteComponent";

describe("AutoCompleteComponent", () => {
    test("render", () => {
        const { container } = render(<AutoCompleteComponent />)
        expect(container).toMatchSnapshot()
        const element = screen.getAllByRole("combobox");
        expect(element).toBeDefined()
    })



    test("user input", () => {
        render(<AutoCompleteComponent />);
        const inputElement = screen.getByRole("combobox");
        fireEvent.change(inputElement, { target: { value: "abc" } });
        expect(inputElement.value).toStrictEqual('abc')
    });

    

});

