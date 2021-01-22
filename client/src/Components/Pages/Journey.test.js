import {render, screen, fireEvent, within} from '@testing-library/react';
import Journey from "./Journey";

describe(`The Journey page has`,  () =>{

    beforeEach(()=> render(<Journey/>))

    test(`the main html wrapper to wrap child elements and components`, ()=>{
        const wrapperElement = screen.getByTestId('journey-wrapper-element-test');
        expect(wrapperElement).toBeInTheDocument();
    })

    test(`text which describes the Journey`, ()=>{
        const textWrapper = screen.getByTestId('journey-text-wrapper-test')
        expect(textWrapper.textContent).toBeTruthy()
    })

});
