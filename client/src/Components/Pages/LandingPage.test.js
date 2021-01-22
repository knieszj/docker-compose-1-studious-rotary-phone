import {render, screen, fireEvent, within} from '@testing-library/react';
import LandingPage from './LandingPage';

const titleTextContent = `Kay Zee's Historic Spices`
const subtitleTextContent = `Experience History Today`

describe(`The landing page has`, () => {

    beforeEach(() => render(<LandingPage/>))

    test(`a main html element that will wrap all the subcomponents`, () => {
        const wrapperElement = screen.getByTestId('landingpage-main-wrapper-div-test');
        expect(wrapperElement).toBeInTheDocument();
    })

    test(`text that will be the title text of the landing page`, () => {
        const titleText = screen.getByTestId('landingpage-title-text-test');
        expect(titleText).toBeInTheDocument();
    })

    test(`a title with the text of ${titleTextContent}`, ()=>{
        const titleText = screen.getByTestId('landingpage-title-text-test');
        expect(titleText).toHaveTextContent(titleTextContent)
    })

    test(`text that will be the subtitle text of the landing page`,()=>{
        const subtitleText = screen.getByTestId('landingpage-subtitle-text-test');
        expect(subtitleText).toBeInTheDocument();
    })

    test(`a subtitle with the text of ${subtitleTextContent}`, ()=>{
        const subtitleText = screen.getByTestId('landingpage-subtitle-text-test');
        expect(subtitleText).toHaveTextContent(subtitleTextContent)
    })

    test(`the main html wrapper which contains 'landingpage-title-text-test'`, ()=>{
        const wrapperElement = screen.getByTestId('landingpage-main-wrapper-div-test');
        const titleText = screen.getByTestId('landingpage-title-text-test');
        expect(wrapperElement).toContainElement(titleText)
    })

    test(`the main html wrapper which contains 'landingpage-subtitle-text-test'`, ()=>{
        const wrapperElement = screen.getByTestId('landingpage-main-wrapper-div-test');
        const subtitleText = screen.getByTestId('landingpage-subtitle-text-test');
        expect(wrapperElement).toContainElement(subtitleText)
    })

})
