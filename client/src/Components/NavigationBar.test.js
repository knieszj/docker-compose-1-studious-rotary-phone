import {render, screen, fireEvent, within, waitFor, cleanup, act} from '@testing-library/react';
import App from "../App";
import JourneyPage from "./Pages/JourneyPage";
import userEvent from "@testing-library/user-event";
import NavigationBar from "./NavigationBar";
import ProblemPage from "./Pages/ProblemPage";
import {unmountComponentAtNode} from "react-dom";


describe(`The Navigation Bar's elements exist: `, () => {
    beforeEach(() => render(<App/>))


    test(`has a "Go Home" button`, () => {
        const goHomeButton = screen.getByTestId("go-home-button");
        expect(goHomeButton).toBeInTheDocument();
    })

    test(`"Go Home" button has the text "Go Home"`, () => {
        const goHomeButton = screen.getByTestId("go-home-button");
        expect(goHomeButton).toHaveTextContent("Go Home");
    })

    test(`There is a div element that is 1 of n`, () => {
        const journeyNavElement = screen.getByTestId('journey-button-nav-element-test');
        expect(journeyNavElement).toBeInTheDocument();
    })

    test(`The first div element contains the text "first"`, () => {
        const journeyNavElement = screen.getByTestId('journey-button-nav-element-test');
        expect(journeyNavElement).toHaveTextContent("Journey")
    })

    test(`There is a div element that is 2 of n`, () => {
        const problemNavElement = screen.getByTestId('problem-button-nav-element-test');
        expect(problemNavElement).toBeInTheDocument();
    })

    test(`The second div element contains the text "first"`, () => {
        const problemNavElement = screen.getByTestId('problem-button-nav-element-test');
        expect(problemNavElement).toHaveTextContent("Problem")
    })

    test(`There is a div element that is 3 of n`, () => {
        const resolutionNavElement = screen.getByTestId('resolution-button-nav-element-test');
        expect(resolutionNavElement).toBeInTheDocument();
    })

    test(`The third div element contains the text "first"`, () => {
        const resolutionNavElement = screen.getByTestId('resolution-button-nav-element-test');
        expect(resolutionNavElement).toHaveTextContent("Resolution")
    })
})


describe(`When the "Journey" button is pressed`, () => {
    beforeEach(() => {
        render(<App/>)
    })
    let container = null;


    test(`the Journey component is rendered`, () => {
        userEvent.click(screen.getByTestId('journey-button-nav-element-test'))
        const journeyPage = screen.getByTestId('journey-wrapper-element-test')
        expect(journeyPage).toBeInTheDocument()
    })
})

describe(`When the "Home"/"Landing Page" button is pressed`, () => {
    beforeEach(() => {
        render(<App/>)
    })

    test(`the landing page is displayed`, () => {
        userEvent.click(screen.getByTestId('go-home-button'))
        const landingPage = screen.getByTestId('landingpage-main-wrapper-div-test')
        expect(landingPage).toBeInTheDocument()
    })
})

describe(`When the Problem page button is clicked in the Navigation bar`, () => {
    beforeEach(() => render(<App/>))

    test(`the Problem page is displayed`, () => {
        userEvent.click(screen.getByTestId('problem-button-nav-element-test'))
        const problemPage = screen.getByTestId(`problem-page-wrapper-test`)
        expect(problemPage).toBeInTheDocument()
    })
})

describe(`When the Resolution page button is clicked in teh Navigation bar`, () => {
    beforeEach(() => render(<App/>))

    test(`the Resolution page is displayed`,()=>{

    })
})
