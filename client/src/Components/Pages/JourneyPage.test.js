import {render, screen, fireEvent, within, waitFor} from '@testing-library/react';
import JourneyPage from "./JourneyPage";
import App from "../../App";

describe(`The Journey page has`,  () =>{

    beforeEach(()=> render(<JourneyPage/>))

    test(`the main html wrapper to wrap child elements and components`, ()=>{
        const wrapperElement = screen.getByTestId('journey-wrapper-element-test');
        expect(wrapperElement).toBeInTheDocument();
    })

    test(`text which describes the Journey`, ()=>{
        const textWrapper = screen.getByTestId('journey-text-wrapper-test')
        expect(textWrapper.textContent).toBeTruthy()
    })

});


