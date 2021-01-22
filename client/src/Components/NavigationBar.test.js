import {render, screen, fireEvent, within} from '@testing-library/react';
import App from "../App";


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
        const firstNavElement = screen.getByTestId('first-nav-element-test');
        expect(firstNavElement).toBeInTheDocument();
    })

    test(`The first div element contains the text "first"`, () => {
        const firstNavElement = screen.getByTestId('first-nav-element-test');
        expect(firstNavElement).toHaveTextContent("Journey")
    })

    test(`There is a div element that is 2 of n`, () => {
        const secondNavElement = screen.getByTestId('second-nav-element-test');
        expect(secondNavElement).toBeInTheDocument();
    })

    test(`The second div element contains the text "first"`, () => {
        const secondNavElement = screen.getByTestId('second-nav-element-test');
        expect(secondNavElement).toHaveTextContent("Problem")
    })

    test(`There is a div element that is 3 of n`, () => {
        const thirdNavElement = screen.getByTestId('third-nav-element-test');
        expect(thirdNavElement).toBeInTheDocument();
    })

    test(`The third div element contains the text "first"`, () => {
        const thirdNavElement = screen.getByTestId('third-nav-element-test');
        expect(thirdNavElement).toHaveTextContent("Resolution")
    })

})

