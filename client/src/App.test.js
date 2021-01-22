import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';


test(`renders a "div" element`, () => {
    render(<App/>)
    const linkElement = screen.getByTestId('main-div-test')
    expect(linkElement).toBeInTheDocument()
})

describe(`Navigation Bar functionality and ability to be interacted with`, ()=>{
    beforeEach(() => render(<App/>))

    test(`renders the navigation bar from App.js`,()=>{
        const navBar = screen.getByTestId("navigation-bar-test");
        expect(navBar).toBeInTheDocument();
    })

    test(`the navigation bar component is contained in the App.js main div`, ()=>{
        const linkElement = screen.getByTestId('main-div-test')
        const navBar = screen.getByTestId("navigation-bar-test");
        expect(linkElement).toContainElement(navBar)
    })

})





