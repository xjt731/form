import { render, screen, fireEvent } from "@testing-library/react";
import DatePickerComponent from "../components/DatePickerComponent"



describe('Datepicker component',()=>{
    test('render date picker',()=>{
        const {container} = render(<DatePickerComponent/>)
        expect(container).toBeDefined()
        //fetch components
    })

    test("render", () => {
        /* const { container } = render(<DatePickerComponent />)
        expect(container).toMatchSnapshot() */
        const element = screen.findAllByText("Select date");
        expect(element).toBeDefined()
    })
})